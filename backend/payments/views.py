import stripe
import paypalrestsdk
from decimal import Decimal
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf import settings
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from .models import Payment, PaymentRefund
from orders.models import Order
from .serializers import (
    PaymentSerializer,
    StripePaymentIntentSerializer,
    StripePaymentConfirmSerializer,
    PayPalCreateOrderSerializer,
    PayPalCaptureOrderSerializer,
    PaymentRefundSerializer
)


# Initialize Stripe
stripe.api_key = settings.STRIPE_SECRET_KEY

# Initialize PayPal
paypalrestsdk.configure({
    "mode": getattr(settings, 'PAYPAL_MODE', 'sandbox'),
    "client_id": getattr(settings, 'PAYPAL_CLIENT_ID', ''),
    "client_secret": getattr(settings, 'PAYPAL_CLIENT_SECRET', '')
})


class PaymentViewSet(viewsets.ModelViewSet):
    """API endpoints for payment processing"""
    
    queryset = Payment.objects.none()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Payment.objects.none()
        return Payment.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['post'], url_path='stripe/create-intent')
    def create_stripe_intent(self, request):
        """Create a Stripe payment intent"""
        serializer = StripePaymentIntentSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        
        order = get_object_or_404(Order, id=serializer.validated_data['order_id'])
        
        try:
            # Create or get existing payment
            payment, created = Payment.objects.get_or_create(
                order=order,
                status__in=['pending', 'processing'],
                payment_method='stripe',
                defaults={
                    'user': request.user,
                    'amount': order.total,
                    'currency': 'eur',
                }
            )
            
            # Create Stripe payment intent
            if not payment.stripe_payment_intent_id:
                intent = stripe.PaymentIntent.create(
                    amount=int(order.total * 100),  # Convert to cents
                    currency='eur',
                    metadata={
                        'order_id': order.id,
                        'order_number': order.order_number,
                        'user_id': request.user.id
                    },
                    description=f"Order {order.order_number}"
                )
                
                payment.stripe_payment_intent_id = intent.id
                payment.transaction_id = f"STRIPE-{intent.id}"
                payment.save()
            else:
                # Retrieve existing intent
                intent = stripe.PaymentIntent.retrieve(
                    payment.stripe_payment_intent_id
                )
            
            return Response({
                'clientSecret': intent.client_secret,
                'paymentIntentId': intent.id,
                'publicKey': settings.STRIPE_PUBLIC_KEY,
                'payment_id': payment.id
            })
            
        except stripe.error.StripeError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {'error': f'Payment creation failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['post'], url_path='stripe/confirm')
    def confirm_stripe_payment(self, request):
        """Confirm Stripe payment completed"""
        serializer = StripePaymentConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        payment_intent_id = serializer.validated_data['payment_intent_id']
        order_id = serializer.validated_data['order_id']
        
        try:
            # Verify payment intent with Stripe
            intent = stripe.PaymentIntent.retrieve(payment_intent_id)
            
            if intent.status != 'succeeded':
                return Response(
                    {'error': 'Payment not completed'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Update payment record
            payment = Payment.objects.get(
                stripe_payment_intent_id=payment_intent_id,
                order_id=order_id
            )
            payment.status = 'completed'
            payment.completed_at = timezone.now()
            
            # Extract card details
            if intent.charges.data:
                charge = intent.charges.data[0]
                if charge.payment_method_details.card:
                    payment.card_last4 = charge.payment_method_details.card.last4
                    payment.card_brand = charge.payment_method_details.card.brand
            
            payment.save()
            
            # Update order
            order = payment.order
            order.payment_status = 'paid'
            order.status = 'processing'
            order.paid_at = timezone.now()
            order.transaction_id = payment.transaction_id
            order.save()
            
            return Response({
                'message': 'Payment confirmed successfully',
                'order_number': order.order_number,
                'payment_id': payment.id
            })
            
        except Payment.DoesNotExist:
            return Response(
                {'error': 'Payment record not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        except stripe.error.StripeError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {'error': f'Payment confirmation failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['post'], url_path='paypal/create-order')
    def create_paypal_order(self, request):
        """Create a PayPal order"""
        serializer = PayPalCreateOrderSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        
        order = get_object_or_404(Order, id=serializer.validated_data['order_id'])
        
        try:
            # Create payment record
            payment, created = Payment.objects.get_or_create(
                order=order,
                status__in=['pending', 'processing'],
                payment_method='paypal',
                defaults={
                    'user': request.user,
                    'amount': order.total,
                    'currency': 'eur',
                }
            )
            
            # Create PayPal order
            paypal_order = paypalrestsdk.Order({
                "intent": "CAPTURE",
                "purchase_units": [{
                    "reference_id": order.order_number,
                    "amount": {
                        "currency_code": "EUR",
                        "value": str(order.total)
                    },
                    "description": f"Order {order.order_number}"
                }],
                "application_context": {
                    "brand_name": "Jolimont Electronics",
                    "landing_page": "BILLING",
                    "user_action": "PAY_NOW",
                    "return_url": f"{settings.FRONTEND_URL}/checkout/success",
                    "cancel_url": f"{settings.FRONTEND_URL}/checkout/cancel"
                }
            })
            
            if paypal_order.create():
                payment.paypal_order_id = paypal_order.id
                payment.transaction_id = f"PAYPAL-{paypal_order.id}"
                payment.save()
                
                # Get approval URL
                approval_url = None
                for link in paypal_order.links:
                    if link.rel == "approve":
                        approval_url = link.href
                        break
                
                return Response({
                    'paypalOrderId': paypal_order.id,
                    'approvalUrl': approval_url,
                    'payment_id': payment.id
                })
            else:
                return Response(
                    {'error': paypal_order.error},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
        except Exception as e:
            return Response(
                {'error': f'PayPal order creation failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['post'], url_path='paypal/capture')
    def capture_paypal_payment(self, request):
        """Capture PayPal payment"""
        serializer = PayPalCaptureOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        paypal_order_id = serializer.validated_data['paypal_order_id']
        order_id = serializer.validated_data['order_id']
        
        try:
            # Get PayPal order
            paypal_order = paypalrestsdk.Order.find(paypal_order_id)
            
            if paypal_order.status == 'APPROVED':
                # Capture payment
                if paypal_order.capture():
                    # Update payment record
                    payment = Payment.objects.get(
                        paypal_order_id=paypal_order_id,
                        order_id=order_id
                    )
                    payment.status = 'completed'
                    payment.completed_at = timezone.now()
                    payment.save()
                    
                    # Update order
                    order = payment.order
                    order.payment_status = 'paid'
                    order.status = 'processing'
                    order.paid_at = timezone.now()
                    order.transaction_id = payment.transaction_id
                    order.save()
                    
                    return Response({
                        'message': 'Payment captured successfully',
                        'order_number': order.order_number,
                        'payment_id': payment.id
                    })
                else:
                    return Response(
                        {'error': paypal_order.error},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            else:
                return Response(
                    {'error': 'Payment not approved'},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
        except Payment.DoesNotExist:
            return Response(
                {'error': 'Payment record not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {'error': f'Payment capture failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=True, methods=['post'])
    def refund(self, request, pk=None):
        """Refund a payment"""
        payment = self.get_object()
        
        if payment.status != 'completed':
            return Response(
                {'error': 'Can only refund completed payments'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer = PaymentRefundSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        amount = serializer.validated_data.get('amount', payment.amount)
        reason = serializer.validated_data.get('reason', '')
        
        try:
            if payment.payment_method == 'stripe':
                # Stripe refund
                refund = stripe.Refund.create(
                    payment_intent=payment.stripe_payment_intent_id,
                    amount=int(amount * 100)
                )
                
                payment_refund = PaymentRefund.objects.create(
                    payment=payment,
                    amount=amount,
                    reason=reason,
                    status='completed',
                    refund_id=refund.id,
                    stripe_refund_id=refund.id,
                    completed_at=timezone.now()
                )
                
            elif payment.payment_method == 'paypal':
                # PayPal refund
                capture_id = payment.paypal_order_id
                refund_request = paypalrestsdk.Capture.find(capture_id).refund({
                    "amount": {
                        "value": str(amount),
                        "currency_code": payment.currency.upper()
                    }
                })
                
                if refund_request.success():
                    payment_refund = PaymentRefund.objects.create(
                        payment=payment,
                        amount=amount,
                        reason=reason,
                        status='completed',
                        refund_id=refund_request.id,
                        paypal_refund_id=refund_request.id,
                        completed_at=timezone.now()
                    )
                else:
                    return Response(
                        {'error': 'PayPal refund failed'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            
            # Update payment and order status
            payment.status = 'refunded'
            payment.save()
            
            payment.order.payment_status = 'refunded'
            payment.order.status = 'refunded'
            payment.order.save()
            
            return Response({
                'message': 'Refund processed successfully',
                'refund_id': payment_refund.refund_id
            })
            
        except Exception as e:
            return Response(
                {'error': f'Refund failed: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


@csrf_exempt
def stripe_webhook(request):
    """Handle Stripe webhooks"""
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    webhook_secret = getattr(settings, 'STRIPE_WEBHOOK_SECRET', '')
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, webhook_secret
        )
    except ValueError:
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError:
        return HttpResponse(status=400)
    
    # Handle the event
    if event.type == 'payment_intent.succeeded':
        payment_intent = event.data.object
        
        try:
            payment = Payment.objects.get(
                stripe_payment_intent_id=payment_intent.id
            )
            if payment.status != 'completed':
                payment.status = 'completed'
                payment.completed_at = timezone.now()
                payment.save()
                
                # Update order
                order = payment.order
                order.payment_status = 'paid'
                order.status = 'processing'
                order.paid_at = timezone.now()
                order.save()
        except Payment.DoesNotExist:
            pass
    
    elif event.type == 'payment_intent.payment_failed':
        payment_intent = event.data.object
        
        try:
            payment = Payment.objects.get(
                stripe_payment_intent_id=payment_intent.id
            )
            payment.status = 'failed'
            payment.error_message = payment_intent.last_payment_error.message if payment_intent.last_payment_error else 'Payment failed'
            payment.save()
            
            order = payment.order
            order.payment_status = 'failed'
            order.save()
        except Payment.DoesNotExist:
            pass
    
    return HttpResponse(status=200)

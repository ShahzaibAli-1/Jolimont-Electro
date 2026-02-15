from rest_framework import serializers
from .models import Payment, PaymentRefund
from orders.models import Order


class PaymentSerializer(serializers.ModelSerializer):
    """Serializer for payment details"""
    
    order_number = serializers.CharField(source='order.order_number', read_only=True)
    
    class Meta:
        model = Payment
        fields = [
            'id', 'order', 'order_number', 'payment_method', 'amount', 'currency',
            'status', 'transaction_id', 'card_last4', 'card_brand',
            'created_at', 'completed_at', 'error_message'
        ]
        read_only_fields = ['id', 'status', 'transaction_id', 'created_at', 'completed_at']


class StripePaymentIntentSerializer(serializers.Serializer):
    """Serializer for creating Stripe payment intent"""
    
    order_id = serializers.IntegerField()
    
    def validate_order_id(self, value):
        try:
            order = Order.objects.get(id=value)
            if order.user != self.context['request'].user:
                raise serializers.ValidationError("Order does not belong to you")
            if order.payment_status == 'paid':
                raise serializers.ValidationError("Order is already paid")
            return value
        except Order.DoesNotExist:
            raise serializers.ValidationError("Order not found")


class StripePaymentConfirmSerializer(serializers.Serializer):
    """Serializer for confirming Stripe payment"""
    
    payment_intent_id = serializers.CharField()
    order_id = serializers.IntegerField()


class PayPalCreateOrderSerializer(serializers.Serializer):
    """Serializer for creating PayPal order"""
    
    order_id = serializers.IntegerField()
    
    def validate_order_id(self, value):
        try:
            order = Order.objects.get(id=value)
            if order.user != self.context['request'].user:
                raise serializers.ValidationError("Order does not belong to you")
            if order.payment_status == 'paid':
                raise serializers.ValidationError("Order is already paid")
            return value
        except Order.DoesNotExist:
            raise serializers.ValidationError("Order not found")


class PayPalCaptureOrderSerializer(serializers.Serializer):
    """Serializer for capturing PayPal payment"""
    
    paypal_order_id = serializers.CharField()
    order_id = serializers.IntegerField()


class PaymentRefundSerializer(serializers.ModelSerializer):
    """Serializer for payment refunds"""
    
    class Meta:
        model = PaymentRefund
        fields = [
            'id', 'payment', 'amount', 'reason', 'status',
            'refund_id', 'created_at', 'completed_at'
        ]
        read_only_fields = ['id', 'status', 'refund_id', 'created_at', 'completed_at']

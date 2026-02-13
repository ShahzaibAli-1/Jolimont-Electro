from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from django.utils import timezone
from .models import Order, OrderItem, Cart, CartItem
from products.models import Product
from .serializers import (
    OrderSerializer,
    OrderCreateSerializer,
    CartSerializer,
    CartItemSerializer
)


class OrderViewSet(viewsets.ModelViewSet):
    """API endpoints for orders"""
    
    queryset = Order.objects.none()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):
            return Order.objects.none()
        if not self.request.user.is_authenticated:
            return Order.objects.none()
        return Order.objects.filter(user=self.request.user)
    
    def create(self, request, *args, **kwargs):
        """Create a new order from cart"""
        serializer = OrderCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Get user's cart
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            return Response(
                {'error': 'Cart is empty'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if not cart.items.exists():
            return Response(
                {'error': 'Cart is empty'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Calculate totals
        subtotal = cart.subtotal
        shipping_cost = self._calculate_shipping(
            serializer.validated_data['delivery_method'],
            subtotal
        )
        tax = subtotal * 0.20  # 20% VAT
        total = subtotal + shipping_cost + tax
        
        # Create order
        order = Order.objects.create(
            user=request.user,
            email=serializer.validated_data['email'],
            phone=serializer.validated_data['phone'],
            first_name=serializer.validated_data['first_name'],
            last_name=serializer.validated_data['last_name'],
            shipping_address=serializer.validated_data['shipping_address'],
            shipping_city=serializer.validated_data['shipping_city'],
            shipping_postal_code=serializer.validated_data['shipping_postal_code'],
            shipping_country=serializer.validated_data['shipping_country'],
            delivery_method=serializer.validated_data['delivery_method'],
            payment_method=serializer.validated_data['payment_method'],
            subtotal=subtotal,
            shipping_cost=shipping_cost,
            tax=tax,
            total=total,
            customer_notes=serializer.validated_data.get('customer_notes', '')
        )
        
        # Create order items from cart
        for cart_item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=cart_item.product,
                product_name=cart_item.product.name,
                product_sku=cart_item.product.sku,
                product_image=cart_item.product.image.url if cart_item.product.image else '',
                quantity=cart_item.quantity,
                price=cart_item.product.effective_price
            )
            
            # Update product stock
            cart_item.product.stock_quantity -= cart_item.quantity
            cart_item.product.sales_count += cart_item.quantity
            cart_item.product.save()
        
        # Clear cart
        cart.items.all().delete()
        
        # Return order data
        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_201_CREATED)
    
    def _calculate_shipping(self, delivery_method, subtotal):
        """Calculate shipping cost based on delivery method and subtotal"""
        if subtotal >= 50:
            return 0  # Free shipping over €50
        
        shipping_rates = {
            'express': 9.99,
            'standard': 5.99,
            'relay': 3.99,
            'eco': 4.99,
        }
        
        return shipping_rates.get(delivery_method, 5.99)
    
    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        """Cancel an order"""
        order = self.get_object()
        
        if order.status in ['shipped', 'delivered']:
            return Response(
                {'error': 'Cannot cancel order that has been shipped'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        order.status = 'cancelled'
        order.save()
        
        # Restore stock
        for item in order.items.all():
            if item.product:
                item.product.stock_quantity += item.quantity
                item.product.sales_count -= item.quantity
                item.product.save()
        
        serializer = self.get_serializer(order)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def track(self, request, pk=None):
        """Track order status"""
        order = self.get_object()
        
        timeline = []
        
        timeline.append({
            'status': 'pending',
            'label': 'Order Placed',
            'completed': True,
            'timestamp': order.created_at
        })
        
        if order.paid_at:
            timeline.append({
                'status': 'paid',
                'label': 'Payment Confirmed',
                'completed': True,
                'timestamp': order.paid_at
            })
        
        if order.status in ['processing', 'shipped', 'delivered']:
            timeline.append({
                'status': 'processing',
                'label': 'Processing',
                'completed': True,
                'timestamp': order.updated_at
            })
        
        if order.shipped_at:
            timeline.append({
                'status': 'shipped',
                'label': 'Shipped',
                'completed': True,
                'timestamp': order.shipped_at,
                'tracking_number': order.tracking_number
            })
        
        if order.delivered_at:
            timeline.append({
                'status': 'delivered',
                'label': 'Delivered',
                'completed': True,
                'timestamp': order.delivered_at
            })
        
        return Response({
            'order': OrderSerializer(order).data,
            'timeline': timeline
        })


class CartViewSet(viewsets.ViewSet):
    """API endpoints for shopping cart"""
    
    permission_classes = [AllowAny]
    serializer_class = CartSerializer
    
    def _get_or_create_cart(self, request):
        """Get or create cart for user or session"""
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
        else:
            session_key = request.session.session_key
            if not session_key:
                request.session.create()
                session_key = request.session.session_key
            cart, created = Cart.objects.get_or_create(session_key=session_key)
        return cart
    
    def list(self, request):
        """Get current cart"""
        cart = self._get_or_create_cart(request)
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def add_item(self, request):
        """Add item to cart"""
        cart = self._get_or_create_cart(request)
        
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        
        try:
            product = Product.objects.get(id=product_id, is_active=True)
        except Product.DoesNotExist:
            return Response(
                {'error': 'Product not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Check stock
        if product.stock_quantity < quantity:
            return Response(
                {'error': 'Not enough stock'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Add or update cart item
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={'quantity': quantity}
        )
        
        if not created:
            cart_item.quantity += quantity
            if cart_item.quantity > product.stock_quantity:
                return Response(
                    {'error': 'Not enough stock'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            cart_item.save()
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def update_item(self, request):
        """Update cart item quantity"""
        cart = self._get_or_create_cart(request)
        
        item_id = request.data.get('item_id')
        quantity = request.data.get('quantity', 1)
        
        try:
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
        except CartItem.DoesNotExist:
            return Response(
                {'error': 'Cart item not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        if quantity < 1:
            cart_item.delete()
        else:
            if quantity > cart_item.product.stock_quantity:
                return Response(
                    {'error': 'Not enough stock'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            cart_item.quantity = quantity
            cart_item.save()
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def remove_item(self, request):
        """Remove item from cart"""
        cart = self._get_or_create_cart(request)
        
        item_id = request.data.get('item_id')
        
        try:
            cart_item = CartItem.objects.get(id=item_id, cart=cart)
            cart_item.delete()
        except CartItem.DoesNotExist:
            return Response(
                {'error': 'Cart item not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def clear(self, request):
        """Clear all items from cart"""
        cart = self._get_or_create_cart(request)
        cart.items.all().delete()
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)

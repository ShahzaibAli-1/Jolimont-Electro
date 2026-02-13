from rest_framework import serializers
from .models import Order, OrderItem, Cart, CartItem
from products.serializers import ProductListSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    """Serializer for OrderItem"""
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_name', 'product_sku', 'product_image',
                 'quantity', 'price', 'total']
        read_only_fields = ['product_name', 'product_sku', 'product_image', 'price', 'total']


class OrderSerializer(serializers.ModelSerializer):
    """Serializer for Order"""
    
    items = OrderItemSerializer(many=True, read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'order_number', 'status', 'payment_status', 'email', 'phone',
                 'first_name', 'last_name', 'shipping_address', 'shipping_city',
                 'shipping_postal_code', 'shipping_country', 'delivery_method',
                 'tracking_number', 'payment_method', 'subtotal', 'shipping_cost',
                 'tax', 'discount', 'total', 'customer_notes', 'items',
                 'created_at', 'paid_at', 'shipped_at', 'delivered_at']
        read_only_fields = ['order_number', 'created_at', 'paid_at', 'shipped_at', 'delivered_at']


class OrderCreateSerializer(serializers.Serializer):
    """Serializer for creating orders"""
    
    # Customer info
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    
    # Shipping
    shipping_address = serializers.CharField(max_length=255)
    shipping_city = serializers.CharField(max_length=100)
    shipping_postal_code = serializers.CharField(max_length=20)
    shipping_country = serializers.CharField(max_length=100, default='France')
    delivery_method = serializers.ChoiceField(choices=['express', 'standard', 'relay', 'eco'])
    
    # Payment
    payment_method = serializers.CharField(max_length=20)
    
    # Optional
    customer_notes = serializers.CharField(required=False, allow_blank=True)
    
    def validate(self, data):
        # Add custom validation here
        return data


class CartItemSerializer(serializers.ModelSerializer):
    """Serializer for CartItem"""
    
    product = ProductListSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_id', 'quantity', 'total', 'created_at']
        read_only_fields = ['created_at']
    
    def validate_quantity(self, value):
        if value < 1:
            raise serializers.ValidationError("Quantity must be at least 1")
        return value


class CartSerializer(serializers.ModelSerializer):
    """Serializer for Cart"""
    
    items = CartItemSerializer(many=True, read_only=True)
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    item_count = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Cart
        fields = ['id', 'items', 'subtotal', 'item_count', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

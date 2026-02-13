from django.contrib import admin
from .models import Order, OrderItem, Cart, CartItem


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ['product_name', 'product_sku', 'price', 'quantity', 'total']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number', 'user', 'email', 'status', 'payment_status',
                   'total', 'created_at']
    list_filter = ['status', 'payment_status', 'delivery_method', 'created_at']
    search_fields = ['order_number', 'email', 'phone', 'user__email']
    readonly_fields = ['order_number', 'created_at', 'updated_at']
    inlines = [OrderItemInline]
    
    fieldsets = (
        ('Order Information', {
            'fields': ('order_number', 'user', 'status', 'payment_status')
        }),
        ('Customer Information', {
            'fields': ('email', 'phone', 'first_name', 'last_name')
        }),
        ('Shipping', {
            'fields': ('shipping_address', 'shipping_city', 'shipping_postal_code',
                      'shipping_country', 'delivery_method', 'tracking_number')
        }),
        ('Payment', {
            'fields': ('payment_method', 'transaction_id')
        }),
        ('Pricing', {
            'fields': ('subtotal', 'shipping_cost', 'tax', 'discount', 'total')
        }),
        ('Notes', {
            'fields': ('customer_notes', 'admin_notes'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'paid_at', 'shipped_at', 'delivered_at'),
            'classes': ('collapse',)
        }),
    )


class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 0
    readonly_fields = ['product', 'quantity', 'created_at']


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'session_key', 'item_count', 'subtotal', 'created_at']
    search_fields = ['user__email', 'session_key']
    readonly_fields = ['created_at', 'updated_at', 'subtotal', 'item_count']
    inlines = [CartItemInline]

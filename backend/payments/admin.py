from django.contrib import admin
from .models import Payment, PaymentRefund


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['transaction_id', 'order', 'user', 'payment_method', 
                   'amount', 'status', 'created_at']
    list_filter = ['payment_method', 'status', 'created_at']
    search_fields = ['transaction_id', 'order__order_number', 'user__email',
                    'stripe_payment_intent_id', 'paypal_order_id']
    readonly_fields = ['transaction_id', 'stripe_payment_intent_id', 
                      'paypal_order_id', 'created_at', 'updated_at', 'completed_at']
    
    fieldsets = (
        ('Order Information', {
            'fields': ('order', 'user')
        }),
        ('Payment Details', {
            'fields': ('payment_method', 'amount', 'currency', 'status')
        }),
        ('Transaction IDs', {
            'fields': ('transaction_id', 'stripe_payment_intent_id', 'paypal_order_id')
        }),
        ('Card Details', {
            'fields': ('card_last4', 'card_brand')
        }),
        ('Metadata', {
            'fields': ('metadata', 'error_message')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'completed_at')
        }),
    )


@admin.register(PaymentRefund)
class PaymentRefundAdmin(admin.ModelAdmin):
    list_display = ['refund_id', 'payment', 'amount', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['refund_id', 'payment__transaction_id', 'stripe_refund_id', 'paypal_refund_id']
    readonly_fields = ['refund_id', 'stripe_refund_id', 'paypal_refund_id',
                      'created_at', 'updated_at', 'completed_at']

from django.contrib import admin
from .models import ContactMessage, ChatMessage, Diagnostic


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'status', 'created_at']
    list_filter = ['status', 'subject', 'created_at']
    search_fields = ['name', 'email', 'message', 'order_number']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone', 'user')
        }),
        ('Message Details', {
            'fields': ('subject', 'message', 'order_number')
        }),
        ('Status', {
            'fields': ('status', 'admin_notes', 'resolved_at')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ['session_id', 'user', 'is_bot', 'message_preview', 'created_at']
    list_filter = ['is_bot', 'created_at']
    search_fields = ['session_id', 'message', 'user__email']
    readonly_fields = ['created_at']
    
    def message_preview(self, obj):
        return obj.message[:50] + '...' if len(obj.message) > 50 else obj.message
    message_preview.short_description = 'Message'


@admin.register(Diagnostic)
class DiagnosticAdmin(admin.ModelAdmin):
    list_display = ['appliance_type', 'appliance_brand', 'appliance_model', 'user', 'created_at']
    list_filter = ['appliance_type', 'created_at']
    search_fields = ['appliance_brand', 'appliance_model', 'problem', 'user__email']
    readonly_fields = ['created_at']

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, UserProfile


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['username', 'email', 'first_name', 'last_name', 'is_staff', 'created_at']
    list_filter = ['is_staff', 'is_superuser', 'is_active', 'created_at']
    search_fields = ['username', 'email', 'first_name', 'last_name']
    ordering = ['-created_at']
    
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('phone', 'address', 'city', 'postal_code', 'country')}),
        ('Preferences', {'fields': ('newsletter', 'marketing_emails')}),
    )


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'preferred_language', 'total_orders', 'total_spent', 'loyalty_points']
    list_filter = ['preferred_language']
    search_fields = ['user__email', 'user__username']
    readonly_fields = ['total_orders', 'total_spent', 'loyalty_points']

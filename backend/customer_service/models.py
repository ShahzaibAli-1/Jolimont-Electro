from django.db import models
from django.conf import settings


class ContactMessage(models.Model):
    """Customer contact messages"""
    
    SUBJECT_CHOICES = [
        ('order_inquiry', 'Order Inquiry'),
        ('product_info', 'Product Information'),
        ('returns', 'Returns & Refunds'),
        ('technical_support', 'Technical Support'),
        ('other', 'Other'),
    ]
    
    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
        ('closed', 'Closed'),
    ]
    
    # Contact information
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    
    # Message details
    subject = models.CharField(max_length=50, choices=SUBJECT_CHOICES)
    message = models.TextField()
    order_number = models.CharField(max_length=50, blank=True, help_text='If related to an order')
    
    # Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    
    # User reference (if logged in)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, 
                           null=True, blank=True, related_name='contact_messages')
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    resolved_at = models.DateTimeField(null=True, blank=True)
    
    # Admin notes
    admin_notes = models.TextField(blank=True)
    
    class Meta:
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.get_subject_display()}"


class ChatMessage(models.Model):
    """Chatbot conversation messages"""
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                           null=True, blank=True, related_name='chat_messages')
    session_id = models.CharField(max_length=100)
    
    message = models.TextField()
    is_bot = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Chat Message'
        verbose_name_plural = 'Chat Messages'
        ordering = ['created_at']
    
    def __str__(self):
        sender = "Bot" if self.is_bot else (self.user.email if self.user else "Anonymous")
        return f"{sender}: {self.message[:50]}"


class Diagnostic(models.Model):
    """DIY diagnostic tool results"""
    
    APPLIANCE_CHOICES = [
        ('washing_machine', 'Washing Machine'),
        ('dishwasher', 'Dishwasher'),
        ('oven', 'Oven'),
        ('refrigerator', 'Refrigerator'),
        ('dryer', 'Dryer'),
    ]
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL,
                           null=True, blank=True, related_name='diagnostics')
    
    appliance_type = models.CharField(max_length=50, choices=APPLIANCE_CHOICES)
    appliance_brand = models.CharField(max_length=100)
    appliance_model = models.CharField(max_length=100)
    
    # Problem description
    problem = models.TextField()
    symptoms = models.JSONField(default=list, help_text='List of symptoms selected')
    
    # Diagnostic result
    diagnosis = models.TextField()
    recommended_parts = models.JSONField(default=list, help_text='List of recommended product IDs')
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Diagnostic'
        verbose_name_plural = 'Diagnostics'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.appliance_type} - {self.appliance_brand} {self.appliance_model}"

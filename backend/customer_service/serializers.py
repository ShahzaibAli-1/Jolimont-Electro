from rest_framework import serializers
from .models import ContactMessage, ChatMessage, Diagnostic


class ContactMessageSerializer(serializers.ModelSerializer):
    """Serializer for ContactMessage"""
    
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 
                 'order_number', 'status', 'created_at']
        read_only_fields = ['status', 'created_at']


class ChatMessageSerializer(serializers.ModelSerializer):
    """Serializer for ChatMessage"""
    
    class Meta:
        model = ChatMessage
        fields = ['id', 'message', 'is_bot', 'created_at']
        read_only_fields = ['is_bot', 'created_at']


class DiagnosticSerializer(serializers.ModelSerializer):
    """Serializer for Diagnostic"""
    
    class Meta:
        model = Diagnostic
        fields = ['id', 'appliance_type', 'appliance_brand', 'appliance_model',
                 'problem', 'symptoms', 'diagnosis', 'recommended_parts', 'created_at']
        read_only_fields = ['diagnosis', 'recommended_parts', 'created_at']

from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for UserProfile"""
    
    class Meta:
        model = UserProfile
        fields = ['preferred_language', 'total_orders', 'total_spent', 'loyalty_points']
        read_only_fields = ['total_orders', 'total_spent', 'loyalty_points']


class UserSerializer(serializers.ModelSerializer):
    """Serializer for User"""
    
    profile = UserProfileSerializer(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'phone', 
                 'address', 'city', 'postal_code', 'country', 'newsletter', 
                 'marketing_emails', 'profile', 'created_at']
        read_only_fields = ['id', 'created_at']


class RegisterSerializer(serializers.ModelSerializer):
    """Serializer for user registration"""
    
    password = serializers.CharField(write_only=True, min_length=8)
    password2 = serializers.CharField(write_only=True, min_length=8)
    username = serializers.CharField(required=False)
    first_name = serializers.CharField(required=False, allow_blank=True)
    last_name = serializers.CharField(required=False, allow_blank=True)
    phone = serializers.CharField(required=False, allow_blank=True)
    newsletter = serializers.BooleanField(required=False, default=False)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 'first_name', 
                 'last_name', 'phone', 'newsletter']
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password2": "Passwords don't match"})
        
        # Generate username if not provided
        if not data.get('username'):
            email = data.get('email', '')
            base_username = email.split('@')[0]
            username = base_username
            counter = 1
            while User.objects.filter(username=username).exists():
                username = f"{base_username}{counter}"
                counter += 1
            data['username'] = username
        
        return data
    
    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        # UserProfile is automatically created by the signal in signals.py
        return user


class LoginSerializer(serializers.Serializer):
    """Serializer for user login"""
    
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        
        if email and password:
            try:
                user_obj = User.objects.get(email=email)
                user = authenticate(username=user_obj.username, password=password)
                
                if not user:
                    raise serializers.ValidationError({"non_field_errors": ["Invalid email or password"]})
                
                if not user.is_active:
                    raise serializers.ValidationError({"non_field_errors": ["User account is disabled"]})
                
                data['user'] = user
            except User.DoesNotExist:
                raise serializers.ValidationError({"non_field_errors": ["Invalid email or password"]})
        else:
            raise serializers.ValidationError({"non_field_errors": ["Must include email and password"]})
        
        return data


class ChangePasswordSerializer(serializers.Serializer):
    """Serializer for password change"""
    
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, min_length=8)

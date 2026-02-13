from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from django.contrib.auth import login
from .serializers import (
    UserSerializer, 
    RegisterSerializer, 
    LoginSerializer,
    ChangePasswordSerializer
)
from .models import User


class RegisterAPI(generics.GenericAPIView):
    """API view for user registration"""
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Create auth token
        _, token = AuthToken.objects.create(user)
        
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token
        }, status=status.HTTP_201_CREATED)


class LoginAPI(KnoxLoginView):
    """API view for user login"""
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer
    
    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class UserAPI(generics.RetrieveUpdateAPIView):
    """API view for getting and updating user profile"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user


class ChangePasswordAPI(generics.UpdateAPIView):
    """API view for changing password"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ChangePasswordSerializer
    
    def update(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = request.user
        
        # Check old password
        if not user.check_password(serializer.data.get('old_password')):
            return Response(
                {'old_password': ['Wrong password.']},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Set new password
        user.set_password(serializer.data.get('new_password'))
        user.save()
        
        return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)

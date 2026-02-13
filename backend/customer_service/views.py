from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import ContactMessage, ChatMessage, Diagnostic
from .serializers import ContactMessageSerializer, ChatMessageSerializer, DiagnosticSerializer
from products.models import Product
import uuid


class ContactMessageViewSet(viewsets.ModelViewSet):
    """API endpoints for contact messages"""
    
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return ContactMessage.objects.filter(user=self.request.user)
        return ContactMessage.objects.none()
    
    def create(self, request, *args, **kwargs):
        """Create a new contact message"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Associate with user if authenticated
        if request.user.is_authenticated:
            serializer.save(user=request.user)
        else:
            serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ChatbotViewSet(viewsets.ViewSet):
    """API endpoints for chatbot"""
    
    permission_classes = [AllowAny]
    serializer_class = ChatMessageSerializer
    
    @action(detail=False, methods=['post'])
    def send_message(self, request):
        """Send a message to chatbot"""
        message = request.data.get('message', '')
        session_id = request.data.get('session_id', str(uuid.uuid4()))
        
        if not message:
            return Response(
                {'error': 'Message is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Save user message
        user_msg = ChatMessage.objects.create(
            user=request.user if request.user.is_authenticated else None,
            session_id=session_id,
            message=message,
            is_bot=False
        )
        
        # Generate bot response (simplified - can be enhanced with AI)
        bot_response = self._generate_bot_response(message)
        
        # Save bot response
        bot_msg = ChatMessage.objects.create(
            user=request.user if request.user.is_authenticated else None,
            session_id=session_id,
            message=bot_response,
            is_bot=True
        )
        
        return Response({
            'session_id': session_id,
            'user_message': ChatMessageSerializer(user_msg).data,
            'bot_response': ChatMessageSerializer(bot_msg).data
        })
    
    def _generate_bot_response(self, message):
        """Generate chatbot response (simplified)"""
        message_lower = message.lower()
        
        if 'hello' in message_lower or 'hi' in message_lower:
            return "Hello! How can I help you today with your appliance parts?"
        elif 'order' in message_lower:
            return "I can help you with order-related questions. Please provide your order number or describe your issue."
        elif 'product' in message_lower or 'part' in message_lower:
            return "I can help you find the right parts. What appliance do you need parts for?"
        elif 'shipping' in message_lower or 'delivery' in message_lower:
            return "We offer multiple delivery options: Express (1-2 days), Standard (3-5 days), Relay Points, and Eco delivery. Free shipping on orders over €50!"
        elif 'return' in message_lower:
            return "We offer a 30-day return policy for most products. Would you like to initiate a return?"
        else:
            return "Thank you for your message. How can I assist you with finding the right appliance parts or answering your questions?"
    
    @action(detail=False, methods=['get'])
    def get_conversation(self, request):
        """Get conversation history"""
        session_id = request.query_params.get('session_id')
        
        if not session_id:
            return Response(
                {'error': 'session_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        messages = ChatMessage.objects.filter(session_id=session_id)
        serializer = ChatMessageSerializer(messages, many=True)
        
        return Response({
            'session_id': session_id,
            'messages': serializer.data
        })


class DiagnosticViewSet(viewsets.ModelViewSet):
    """API endpoints for diagnostic tool"""
    
    serializer_class = DiagnosticSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Diagnostic.objects.filter(user=self.request.user)
        return Diagnostic.objects.none()
    
    def create(self, request, *args, **kwargs):
        """Create a new diagnostic"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Generate diagnosis and recommendations
        diagnosis, recommended_parts = self._generate_diagnosis(
            serializer.validated_data['appliance_type'],
            serializer.validated_data['symptoms']
        )
        
        # Save diagnostic
        diagnostic = serializer.save(
            user=request.user if request.user.is_authenticated else None,
            diagnosis=diagnosis,
            recommended_parts=recommended_parts
        )
        
        return Response(
            DiagnosticSerializer(diagnostic).data,
            status=status.HTTP_201_CREATED
        )
    
    def _generate_diagnosis(self, appliance_type, symptoms):
        """Generate diagnosis based on symptoms (simplified)"""
        # This would typically use AI/ML or a rule-based system
        diagnosis = f"Based on your symptoms for your {appliance_type}, we recommend checking the following components."
        
        # Recommend some common parts (simplified)
        recommended_products = Product.objects.filter(
            category__name__icontains=appliance_type,
            is_active=True
        )[:3]
        
        recommended_parts = [product.id for product in recommended_products]
        
        return diagnosis, recommended_parts

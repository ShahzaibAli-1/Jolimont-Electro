from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import BlogArticle, FAQ, Page, Newsletter
from .serializers import (
    BlogArticleListSerializer,
    BlogArticleDetailSerializer,
    FAQSerializer,
    PageSerializer,
    NewsletterSerializer
)


class BlogArticleViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for blog articles"""
    
    queryset = BlogArticle.objects.filter(is_published=True)
    permission_classes = [AllowAny]
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return BlogArticleListSerializer
        return BlogArticleDetailSerializer
    
    def retrieve(self, request, *args, **kwargs):
        """Get blog article detail and increment view count"""
        instance = self.get_object()
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def latest(self, request):
        """Get latest blog articles"""
        articles = self.queryset.order_by('-published_at')[:5]
        serializer = BlogArticleListSerializer(articles, many=True)
        return Response(serializer.data)


class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for FAQs"""
    
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get FAQs grouped by category"""
        categories = {}
        for faq in self.queryset:
            if faq.category not in categories:
                categories[faq.category] = []
            categories[faq.category].append(FAQSerializer(faq).data)
        
        return Response(categories)


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for static pages"""
    
    queryset = Page.objects.filter(is_active=True)
    serializer_class = PageSerializer
    permission_classes = [AllowAny]
    lookup_field = 'page_type'


class NewsletterViewSet(viewsets.ViewSet):
    """API endpoints for newsletter subscriptions"""
    
    permission_classes = [AllowAny]
    serializer_class = NewsletterSerializer
    
    @action(detail=False, methods=['post'])
    def subscribe(self, request):
        """Subscribe to newsletter"""
        serializer = NewsletterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        
        # Check if already subscribed
        newsletter, created = Newsletter.objects.get_or_create(
            email=email,
            defaults={'name': serializer.validated_data.get('name', '')}
        )
        
        if not created:
            if newsletter.is_active:
                return Response(
                    {'message': 'You are already subscribed'},
                    status=status.HTTP_200_OK
                )
            else:
                # Reactivate subscription
                newsletter.is_active = True
                newsletter.unsubscribed_at = None
                newsletter.save()
                return Response(
                    {'message': 'Your subscription has been reactivated'},
                    status=status.HTTP_200_OK
                )
        
        return Response(
            {'message': 'Successfully subscribed to newsletter'},
            status=status.HTTP_201_CREATED
        )
    
    @action(detail=False, methods=['post'])
    def unsubscribe(self, request):
        """Unsubscribe from newsletter"""
        email = request.data.get('email')
        
        if not email:
            return Response(
                {'error': 'Email is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            newsletter = Newsletter.objects.get(email=email)
            newsletter.is_active = False
            from django.utils import timezone
            newsletter.unsubscribed_at = timezone.now()
            newsletter.save()
            
            return Response(
                {'message': 'Successfully unsubscribed from newsletter'},
                status=status.HTTP_200_OK
            )
        except Newsletter.DoesNotExist:
            return Response(
                {'error': 'Email not found in newsletter list'},
                status=status.HTTP_404_NOT_FOUND
            )

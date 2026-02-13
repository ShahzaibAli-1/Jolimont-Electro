from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q, Avg
from .models import Brand, Category, Product, ProductReview
from .serializers import (
    BrandSerializer,
    CategorySerializer,
    ProductListSerializer,
    ProductDetailSerializer,
    ProductCreateUpdateSerializer,
    ProductReviewSerializer
)


class BrandViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for brands"""
    
    queryset = Brand.objects.filter(is_active=True)
    serializer_class = BrandSerializer
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'])
    def products(self, request, slug=None):
        """Get all products for a specific brand"""
        brand = self.get_object()
        products = Product.objects.filter(brand=brand, is_active=True)
        
        # Apply filters
        category = request.query_params.get('category', None)
        if category:
            products = products.filter(category__slug=category)
        
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = ProductListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoints for categories"""
    
    queryset = Category.objects.filter(is_active=True, parent=None)
    serializer_class = CategorySerializer
    lookup_field = 'slug'
    
    @action(detail=True, methods=['get'])
    def products(self, request, slug=None):
        """Get all products for a specific category"""
        category = self.get_object()
        # Include products from subcategories
        categories = [category] + list(category.subcategories.filter(is_active=True))
        products = Product.objects.filter(category__in=categories, is_active=True)
        
        # Apply filters
        brand = request.query_params.get('brand', None)
        if brand:
            products = products.filter(brand__slug=brand)
        
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = ProductListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    """API endpoints for products"""
    
    queryset = Product.objects.filter(is_active=True)
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['brand', 'category', 'is_compatible', 'is_original', 'fast_delivery', 'ai_recommended']
    search_fields = ['name', 'description', 'sku']
    ordering_fields = ['price', 'created_at', 'sales_count', 'views_count']
    ordering = ['-created_at']
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        return ProductDetailSerializer
    
    def retrieve(self, request, *args, **kwargs):
        """Get product detail and increment view count"""
        instance = self.get_object()
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured products"""
        products = self.queryset.filter(is_featured=True)
        page = self.paginate_queryset(products)
        if page is not None:
            serializer = ProductListSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def bestsellers(self, request):
        """Get best-selling products"""
        products = self.queryset.order_by('-sales_count')[:20]
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def new_arrivals(self, request):
        """Get new arrival products"""
        products = self.queryset.order_by('-created_at')[:20]
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'])
    def search_by_model(self, request):
        """Search products by appliance model"""
        appliance_model = request.data.get('appliance_model', '')
        appliance_type = request.data.get('appliance_type', '')
        
        if not appliance_model:
            return Response(
                {'error': 'appliance_model is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Search in compatibilities
        products = Product.objects.filter(
            compatibilities__appliance_model__icontains=appliance_model,
            is_active=True
        ).distinct()
        
        if appliance_type:
            products = products.filter(
                compatibilities__appliance_type__icontains=appliance_type
            )
        
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def add_review(self, request, slug=None):
        """Add a review for a product"""
        product = self.get_object()
        serializer = ProductReviewSerializer(data=request.data)
        
        if serializer.is_valid():
            # Check if user already reviewed this product
            if ProductReview.objects.filter(product=product, user=request.user).exists():
                return Response(
                    {'error': 'You have already reviewed this product'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            serializer.save(user=request.user, product=product)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'])
    def ai_search(self, request):
        """AI-powered search for products"""
        query = request.data.get('query', '')
        
        if not query:
            return Response(
                {'error': 'query is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Simple keyword-based search (can be enhanced with AI/ML)
        products = Product.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query) |
            Q(category__name__icontains=query) |
            Q(brand__name__icontains=query),
            is_active=True
        ).distinct()
        
        serializer = ProductListSerializer(products, many=True)
        return Response({
            'query': query,
            'results': serializer.data,
            'count': products.count()
        })

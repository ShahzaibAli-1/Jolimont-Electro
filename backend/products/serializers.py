from rest_framework import serializers
from .models import Brand, Category, Product, ProductSpecification, ProductCompatibility, ProductReview


class BrandSerializer(serializers.ModelSerializer):
    """Serializer for Brand model"""
    
    class Meta:
        model = Brand
        fields = ['id', 'name', 'slug', 'logo', 'description', 'website']


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for Category model"""
    
    subcategories = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'icon', 'parent', 'subcategories']
    
    def get_subcategories(self, obj):
        if obj.subcategories.exists():
            return CategorySerializer(obj.subcategories.filter(is_active=True), many=True).data
        return []


class ProductSpecificationSerializer(serializers.ModelSerializer):
    """Serializer for ProductSpecification model"""
    
    class Meta:
        model = ProductSpecification
        fields = ['id', 'name', 'value', 'order']


class ProductCompatibilitySerializer(serializers.ModelSerializer):
    """Serializer for ProductCompatibility model"""
    
    brand_name = serializers.CharField(source='brand.name', read_only=True)
    
    class Meta:
        model = ProductCompatibility
        fields = ['id', 'appliance_type', 'appliance_model', 'brand', 'brand_name']


class ProductReviewSerializer(serializers.ModelSerializer):
    """Serializer for ProductReview model"""
    
    user_name = serializers.CharField(source='user.get_full_name', read_only=True)
    
    class Meta:
        model = ProductReview
        fields = ['id', 'user', 'user_name', 'rating', 'title', 'comment', 
                 'is_verified_purchase', 'created_at']
        read_only_fields = ['user', 'is_verified_purchase', 'created_at']


class ProductListSerializer(serializers.ModelSerializer):
    """Compact serializer for product listings"""
    
    brand_name = serializers.CharField(source='brand.name', read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    average_rating = serializers.SerializerMethodField()
    review_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'sku', 'brand_name', 'category_name', 
                 'price', 'sale_price', 'effective_price', 'image', 'in_stock', 
                 'is_compatible', 'fast_delivery', 'ai_recommended', 
                 'average_rating', 'review_count']
    
    def get_average_rating(self, obj):
        reviews = obj.reviews.filter(is_approved=True)
        if reviews.exists():
            return round(sum(r.rating for r in reviews) / reviews.count(), 1)
        return 0
    
    def get_review_count(self, obj):
        return obj.reviews.filter(is_approved=True).count()


class ProductDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for single product view"""
    
    brand = BrandSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    specifications = ProductSpecificationSerializer(many=True, read_only=True)
    compatibilities = ProductCompatibilitySerializer(many=True, read_only=True)
    reviews = ProductReviewSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()
    review_count = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'sku', 'description', 'brand', 'category',
                 'price', 'sale_price', 'effective_price', 'stock_quantity', 'in_stock',
                 'is_low_stock', 'is_compatible', 'is_original', 'fast_delivery',
                 'ai_recommended', 'images', 'specifications', 'compatibilities',
                 'reviews', 'average_rating', 'review_count', 'views_count', 
                 'sales_count', 'created_at', 'updated_at']
    
    def get_average_rating(self, obj):
        reviews = obj.reviews.filter(is_approved=True)
        if reviews.exists():
            return round(sum(r.rating for r in reviews) / reviews.count(), 1)
        return 0
    
    def get_review_count(self, obj):
        return obj.reviews.filter(is_approved=True).count()
    
    def get_images(self, obj):
        images = [obj.image.url if obj.image else None]
        if obj.image_2:
            images.append(obj.image_2.url)
        if obj.image_3:
            images.append(obj.image_3.url)
        if obj.image_4:
            images.append(obj.image_4.url)
        return [img for img in images if img]


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer for creating and updating products"""
    
    class Meta:
        model = Product
        fields = ['name', 'sku', 'description', 'brand', 'category', 'price', 
                 'sale_price', 'stock_quantity', 'low_stock_threshold', 
                 'is_compatible', 'is_original', 'fast_delivery', 'ai_recommended',
                 'image', 'image_2', 'image_3', 'image_4', 'meta_title', 
                 'meta_description', 'is_active', 'is_featured']

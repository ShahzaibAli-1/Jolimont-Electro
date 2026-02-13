from rest_framework import serializers
from .models import BlogArticle, FAQ, Page, Newsletter


class BlogArticleListSerializer(serializers.ModelSerializer):
    """Compact serializer for blog article listings"""
    
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    
    class Meta:
        model = BlogArticle
        fields = ['id', 'title', 'slug', 'excerpt', 'featured_image', 
                 'author_name', 'published_at', 'views_count']


class BlogArticleDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for single blog article view"""
    
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    
    class Meta:
        model = BlogArticle
        fields = ['id', 'title', 'slug', 'excerpt', 'content', 'featured_image',
                 'author_name', 'published_at', 'views_count', 'created_at', 'updated_at']


class FAQSerializer(serializers.ModelSerializer):
    """Serializer for FAQ"""
    
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category']


class PageSerializer(serializers.ModelSerializer):
    """Serializer for static pages"""
    
    class Meta:
        model = Page
        fields = ['id', 'page_type', 'title', 'content', 'updated_at']


class NewsletterSerializer(serializers.ModelSerializer):
    """Serializer for newsletter subscriptions"""
    
    class Meta:
        model = Newsletter
        fields = ['email', 'name']

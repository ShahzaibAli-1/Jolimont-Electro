from django.contrib import admin
from .models import Brand, Category, Product, ProductSpecification, ProductCompatibility, ProductReview


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name', 'website', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'parent', 'is_active', 'created_at']
    list_filter = ['is_active', 'parent', 'created_at']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
    extra = 1


class ProductCompatibilityInline(admin.TabularInline):
    model = ProductCompatibility
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'sku', 'brand', 'category', 'price', 'stock_quantity', 
                   'in_stock', 'is_active', 'created_at']
    list_filter = ['is_active', 'is_featured', 'is_compatible', 'is_original', 
                  'fast_delivery', 'brand', 'category', 'created_at']
    search_fields = ['name', 'sku', 'description']
    prepopulated_fields = {'slug': ('name', 'sku')}
    inlines = [ProductSpecificationInline, ProductCompatibilityInline]
    readonly_fields = ['views_count', 'sales_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'sku', 'description', 'brand', 'category')
        }),
        ('Pricing', {
            'fields': ('price', 'sale_price')
        }),
        ('Inventory', {
            'fields': ('stock_quantity', 'low_stock_threshold')
        }),
        ('Attributes', {
            'fields': ('is_compatible', 'is_original', 'fast_delivery', 'ai_recommended')
        }),
        ('Images', {
            'fields': ('image', 'image_2', 'image_3', 'image_4')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',)
        }),
        ('Status', {
            'fields': ('is_active', 'is_featured')
        }),
        ('Statistics', {
            'fields': ('views_count', 'sales_count', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(ProductReview)
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'rating', 'is_verified_purchase', 'is_approved', 'created_at']
    list_filter = ['rating', 'is_verified_purchase', 'is_approved', 'created_at']
    search_fields = ['product__name', 'user__username', 'user__email', 'comment']
    readonly_fields = ['created_at', 'updated_at']
    actions = ['approve_reviews', 'disapprove_reviews']
    
    def approve_reviews(self, request, queryset):
        queryset.update(is_approved=True)
    approve_reviews.short_description = "Approve selected reviews"
    
    def disapprove_reviews(self, request, queryset):
        queryset.update(is_approved=False)
    disapprove_reviews.short_description = "Disapprove selected reviews"

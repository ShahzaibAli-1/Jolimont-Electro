from django.db import models
from django.utils.text import slugify
from django.conf import settings


class BlogArticle(models.Model):
    """Blog articles"""
    
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    excerpt = models.TextField()
    content = models.TextField()
    
    # Images
    featured_image = models.ImageField(upload_to='blog/', blank=True, null=True)
    
    # Author
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, 
                              null=True, related_name='blog_articles')
    
    # SEO
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    
    # Status
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views_count = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = 'Blog Article'
        verbose_name_plural = 'Blog Articles'
        ordering = ['-published_at', '-created_at']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title


class FAQ(models.Model):
    """Frequently Asked Questions"""
    
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('orders', 'Orders & Delivery'),
        ('products', 'Products'),
        ('returns', 'Returns & Refunds'),
        ('technical', 'Technical Support'),
    ]
    
    question = models.CharField(max_length=255)
    answer = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'
        ordering = ['category', 'order', 'question']
    
    def __str__(self):
        return self.question


class Page(models.Model):
    """Static pages (Warranty, Returns, Terms, etc.)"""
    
    PAGE_TYPE_CHOICES = [
        ('warranty', 'Warranty Policy'),
        ('returns', 'Returns & Refunds'),
        ('terms', 'Terms & Conditions'),
        ('privacy', 'Privacy Policy'),
        ('shipping', 'Shipping Information'),
    ]
    
    page_type = models.CharField(max_length=20, choices=PAGE_TYPE_CHOICES, unique=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    
    # SEO
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Page'
        verbose_name_plural = 'Pages'
    
    def __str__(self):
        return self.get_page_type_display()


class Newsletter(models.Model):
    """Newsletter subscriptions"""
    
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=200, blank=True)
    is_active = models.BooleanField(default=True)
    
    subscribed_at = models.DateTimeField(auto_now_add=True)
    unsubscribed_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        verbose_name = 'Newsletter Subscription'
        verbose_name_plural = 'Newsletter Subscriptions'
        ordering = ['-subscribed_at']
    
    def __str__(self):
        return self.email

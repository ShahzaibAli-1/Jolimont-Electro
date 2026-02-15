"""
URL configuration for jolimont_electronics project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView


def health_check(request):
    return JsonResponse({"status": "ok", "service": "jolimont_electronics_backend"})


def redirect_to_frontend(request, route_path=''):
    base_url = settings.FRONTEND_URL.rstrip('/')
    target = f"{base_url}/{route_path.lstrip('/')}"
    if request.META.get('QUERY_STRING'):
        target = f"{target}?{request.META['QUERY_STRING']}"
    return HttpResponseRedirect(target)

urlpatterns = [
    path('', redirect_to_frontend, name='frontend-home'),
    path('landing/', TemplateView.as_view(template_name='landing_page.html'), name='landing-page'),
    path('catalog/', redirect_to_frontend, {'route_path': 'catalog'}, name='frontend-catalog'),
    path('checkout/', redirect_to_frontend, {'route_path': 'checkout'}, name='frontend-checkout'),
    path('customer-service/', redirect_to_frontend, {'route_path': 'customer-service'}, name='frontend-customer-service'),
    path('diagnostic/', redirect_to_frontend, {'route_path': 'diagnostic'}, name='frontend-diagnostic'),
    path('faq/', redirect_to_frontend, {'route_path': 'faq'}, name='frontend-faq'),
    path('login/', redirect_to_frontend, {'route_path': 'login'}, name='frontend-login'),
    path('order-tracking/', redirect_to_frontend, {'route_path': 'order-tracking'}, name='frontend-order-tracking'),
    path('product-detail/', redirect_to_frontend, {'route_path': 'product-detail'}, name='frontend-product-detail'),
    path('warranty/', redirect_to_frontend, {'route_path': 'warranty'}, name='frontend-warranty'),
    path('returns/', redirect_to_frontend, {'route_path': 'returns'}, name='frontend-returns'),
    path('terms/', redirect_to_frontend, {'route_path': 'terms'}, name='frontend-terms'),
    path('contact/', redirect_to_frontend, {'route_path': 'contact'}, name='frontend-contact'),
    path('brand-products/', redirect_to_frontend, {'route_path': 'brand-products'}, name='frontend-brand-products'),
    path('category-parts/', redirect_to_frontend, {'route_path': 'category-parts'}, name='frontend-category-parts'),
    path('blog-article-1/', redirect_to_frontend, {'route_path': 'blog-article-1'}, name='frontend-blog-article-1'),
    path('blog-article-2/', redirect_to_frontend, {'route_path': 'blog-article-2'}, name='frontend-blog-article-2'),
    path('blog-article-3/', redirect_to_frontend, {'route_path': 'blog-article-3'}, name='frontend-blog-article-3'),
    path('blog-article-4/', redirect_to_frontend, {'route_path': 'blog-article-4'}, name='frontend-blog-article-4'),
    path('blog-article-5/', redirect_to_frontend, {'route_path': 'blog-article-5'}, name='frontend-blog-article-5'),
    path('health/', health_check, name='health-check'),
    path('admin/', admin.site.urls),
    
    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    
    # App URLs
    path('api/auth/', include('users.urls')),
    path('api/products/', include('products.urls')),
    path('api/orders/', include('orders.urls')),
    path('api/', include('payments.urls')),
    path('api/customer-service/', include('customer_service.urls')),
    path('api/content/', include('content.urls')),
    re_path(r'^(?P<route_path>(?!api/|admin/|health/|media/|static/).*)$', redirect_to_frontend, name='frontend-fallback'),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

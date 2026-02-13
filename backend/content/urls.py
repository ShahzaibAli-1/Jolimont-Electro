from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogArticleViewSet, FAQViewSet, PageViewSet, NewsletterViewSet

router = DefaultRouter()
router.register(r'blog', BlogArticleViewSet, basename='blog')
router.register(r'faq', FAQViewSet, basename='faq')
router.register(r'pages', PageViewSet, basename='page')
router.register(r'newsletter', NewsletterViewSet, basename='newsletter')

urlpatterns = [
    path('', include(router.urls)),
]

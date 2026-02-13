from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, ChatbotViewSet, DiagnosticViewSet

router = DefaultRouter()
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'chatbot', ChatbotViewSet, basename='chatbot')
router.register(r'diagnostic', DiagnosticViewSet, basename='diagnostic')

urlpatterns = [
    path('', include(router.urls)),
]

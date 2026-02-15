from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaymentViewSet, stripe_webhook

router = DefaultRouter()
router.register(r'payments', PaymentViewSet, basename='payment')

urlpatterns = [
    path('', include(router.urls)),
    path('webhooks/stripe/', stripe_webhook, name='stripe-webhook'),
]

from django.urls import path
from knox import views as knox_views
from .views import RegisterAPI, LoginAPI, UserAPI, ChangePasswordAPI

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('user/', UserAPI.as_view(), name='user'),
    path('change-password/', ChangePasswordAPI.as_view(), name='change-password'),
]

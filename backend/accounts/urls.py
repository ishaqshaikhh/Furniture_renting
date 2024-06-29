from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('api/login/', views.login, name='login'),
    path('api/signup/',views.signup,name='signup'),
    path('api/get_user/',views.get_user,name='get_data'),
    path('api/profile/',views.profile,name='profile'),

]
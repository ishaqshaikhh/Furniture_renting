from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('api/login/', views.Login,name='login'),
    path('api/singup/',views.signup,name='signup'),
    path('api/get_user/',views.get_user,name='get_data'),

]
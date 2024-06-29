from django.urls import path, include
from . import views

urlpatterns = [
    path("api/getAllProducts/", views.getAllProducts, name="getAllProducts"),
    path("api/addToCart/", views.addToCart, name="addToCart"),
    path("",include("accounts.urls"))

]
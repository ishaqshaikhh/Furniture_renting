from django.urls import path, include
from . import views

urlpatterns = [
    path("api/getAllProducts/", views.getAllProducts, name="getAllProducts"),
    path("",include("accounts.urls"))

]
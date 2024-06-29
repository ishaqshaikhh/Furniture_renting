from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("api/getAllProducts/", views.getAllProducts, name="getAllProducts"),
    path("api/getProduct/", views.getProduct, name="getProduct"),
    path("api/addToCart/", views.addToCart, name="addToCart"),
    path("api/getAllCarts/", views.getAllCarts, name="getAllCarts"),
    path("api/plusCart/", views.plus_cart, name="plusCart"),
    path("api/minusCart/", views.minus_cart, name="minusCart"),
    path("api/removeCart/", views.remove_cart, name="removeCart"),
    path("",include("accounts.urls"))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
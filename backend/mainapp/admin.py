from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(Product)
class ShowProduct(admin.ModelAdmin):
    list_display = ['name', 'description', 'price',]

@admin.register(Category)
class ShowCategory(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(Cart)
class ShowCart(admin.ModelAdmin):
    list_display = ['user']

@admin.register(Order)
class ShowOrder(admin.ModelAdmin):
    list_display = ['user']

@admin.register(OrderItem)
class ShowOrderItem(admin.ModelAdmin):
    list_display = ['user']

@admin.register(Wishlist)
class ShowWishlist(admin.ModelAdmin):
    list_display = ['user','product']
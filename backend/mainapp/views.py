from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json

# Create your views here.
def handle_404():
    return JsonResponse({'status': 404, 'message': '404 Not Found'})

@api_view(["GET"])
def getAllProducts(request):
    products = Products.objects.all()
    category = request.GET.get('category')
    price_range = request.GET.get('price_range')
    sort = request.GET.get('sort')
    if price_range is not None and price_range != "":
        min_price, max_price = map(int, price_range.split("-"))
        products = products.filter(discounted_price__gte=min_price, discounted_price__lte=max_price)
    if category is not None and category != "":
        products = products.filter(category=category)
    if sort == "low_to_high":
        products = products.order_by("discounted_price")
    elif sort == "high_to_low":
        products = products.order_by("-discounted_price")
    elif sort == "a-z":
        products = products.order_by("name")
    elif sort == "z-a":
        products = products.order_by("-name")

    context = {}
    context["price_range"] = price_range
    context["category"] = category
    context["sort"] = sort
    context["products"] = products
    response = {"success": True, "context": context}
    return JsonResponse(response)

@api_view(["POST"])
def addToCart(request):
    prod_id = request.GET['prod_id']
    user = request.user
    product = Product.objects.get(id=prod_id)
    product_in_cart = False
    product_in_cart = Cart.objects.filter(Q(product=prod_id) & Q(user=request.user)).exists()
    cart_product = Cart.objects.filter(user=request.user)
    if product_in_cart == False:
        product = Product.objects.get(id=prod_id)
        Cart(user=user,product=product).save()
    cart_items = len(cart_product)
    amount = 0.0
    temp_amount = 0.0
    cart_product = [p for p in Cart.objects.all() if p.user == request.user]
    for p in cart_product:
        temp_amount = ("%.2f" % (float(p.quantity) * float(p.product.discounted_price)))

        amount += float(temp_amount)

    totalamount = round(amount)
    data = {
            'success':'success',
            "cart_items": cart_items,
            "product_in_cart": product_in_cart,
            "totalamount": totalamount,
            "product_obj": {
                "product":{
                    "id":product.id,
                    "name":product.name,
                    "discounted_price":product.discounted_price,
                    "image": {"url":product.image.url}
                },
                "quantity": 1
            }
    }
    return JsonResponse(data,safe=False)









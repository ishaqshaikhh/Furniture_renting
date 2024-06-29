from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
from mainapp.models import *
from django.db.models import Q
import requests
from django.conf import settings
from accounts.views import BASE_URL
import jwt


# Create your views here.
def handle_404():
    return JsonResponse({'status': 404, 'message': '404 Not Found'})

@api_view(["GET"])
def getAllProducts(request):
    products = Product.objects.all()
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

def verify_token(token):
    try:
        if not token:
            return JsonResponse({"error":"Token is required"})
        url = BASE_URL + "api/token/verify/"
        headers = {"Authorization": f"Bearer {token}"}
        body = {"token":token}
        result = requests.get(url, headers=headers, data=body)
        if result.status_code == 200:
            return JsonResponse({"success":True})
        else:
            return JsonResponse({"error":"Token is not valid"})
    except Exception as e:
        return JsonResponse({"error":f"Something went wrong {str(e)}"})
        

@api_view(["GET"])
def addToCart(request):
    try:
        token = request.GET.get("token")
        if not token:
            return JsonResponse({"error": "Invalid token"})
        result = verify_token(token)
        if "error" in result and result["error"]:
            return JsonResponse({"error": result["error"]})
        
        if "success" in result and result["success"] == True:
            decoded_token = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=["HS256"])
            user_id = decoded_token["user_id"]
            try:
                user = CustomUser.objects.get(id=user_id)
            except:
                user = None
                return JsonResponse({"error":"User does not exist"})
            prod_id = request.GET.get('prod_id')
            product = Product.objects.get(id=prod_id)
            product_in_cart = False
            product_in_cart = Cart.objects.filter(Q(product=prod_id) & Q(user=user)).exists()
            carts = Cart.objects.filter(user=user)
            if product_in_cart == False:
                product = Product.objects.get(id=prod_id)
                Cart(user=user,product=product).save()
            total_cart = len(carts)
            amount = 0.0
            temp_amount = 0.0
            cart_product = [p for p in Cart.objects.all() if p.user == user]
            for p in cart_product:
                temp_amount = ("%.2f" % (float(p.quantity) * float(p.product.discounted_price)))
                amount += float(temp_amount)
            totalamount = round(amount)
            data = {
                'success':True,
                "cart_items": carts,
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
            return JsonResponse(data)
        else:
            return JsonResponse({"error": "Invalid token"})
    except Exception as e:
        return JsonResponse({"error": f"Something went wrong {str(e)}"})



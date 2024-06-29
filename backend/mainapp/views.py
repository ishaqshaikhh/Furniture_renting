from django.shortcuts import render , get_object_or_404
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view
import json
from mainapp.models import *
from django.db.models import Q
import requests
from django.conf import settings
from accounts.views import BASE_URL
import jwt
from django.core import serializers



# Create your views here.
def handle_404(request, exception):
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

def verify_jwt_token(token):
    try:
        if not token:
            return JsonResponse({"error":"Token is required"})
        url = BASE_URL + "api/token/verify/"
        headers = {"Authorization": f"Bearer {token}"}
        body = {"token":token}
        result = requests.post(url, headers=headers, data=body)
        if result.status_code == 200:
            return {"success":True}
        else:
            return {"error":"Token is not valid"}
    except Exception as e:
        return {"error":f"Something went wrong {str(e)}"}
        

@api_view(["GET"])
def addToCart(request):
    try:
        token = request.GET.get("token")
        if not token:
            return JsonResponse({"error": "Invalid token"})
        result = verify_jwt_token(token)
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
                "cart_items": serializers.serialize(format="json",queryset=carts),
                "totalamount": totalamount,
                "product_obj": {
                    "product":{
                        "id":product.id,
                        "name":product.name,
                        "discounted_price":product.discounted_price,
                        "image": {"url":product.image1.url}
                    },
                    "quantity": 1
                }
            }
            return JsonResponse(data)
        else:
            return JsonResponse({"error": "Invalid token"})
    except Exception as e:
        return JsonResponse({"error": f"Something went wrong {str(e)}"})

@api_view(["POST"])
def order(request):
    try:
        token = request.POST.get("token")
        if not token:
            return JsonResponse({"error": "Invalid token"})
        result = verify_token(token)
        if "error" in result and result["error"]:
            return JsonResponse({"error": result["error"]})
        
        decoded_token = jwt.decode(token,settings.JWT_SECRET_KEY,algorithms="HS256")
        user_id = decoded_token["user_id"]

        user = CustomUser.objects.get(user_id=user_id)
        carts = Cart.objects.fliter(user=user)

        if not carts.exists():
            return JsonResponse({"error":"Cart is empty"})
        
        total_amount = 0.0
        for cart_item in carts:
            total_amount += cart_item.quantity * cart_item.product.discounted_price

        
        for cart_item in carts:
            order_item = OrderItem.objects.create(
                order = order,
                product = cart_item.product,
                quantity = cart_item.quantity
            )

            carts.delete()
        return JsonResponse({"success": True,"message": "Order Placed Successfully"})

    except Exception as e:
        return JsonResponse({"error":f"something went wrong : {str(e)}"})

api_view(['GET'])   
def addToWishlist(request,product_id):
    product  = get_object_or_404(Product,pk=product_id)
    wishlist , created = Wishlist.objects.get_or_create(user=request.user,product=product)

    return JsonResponse({'product':product})
@api_view(["GET"])
def getAllCarts(request):
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
            cart_count = Cart.objects.filter(user=user).count()
            amount = 0.0
            total_amount = 0.0
            carts = Cart.objects.filter(user=user)
            cart_items = {}
            for c in carts:
                temp_amount = float(c.product.discounted_price) * int(c.quantity)
                cart_items[c]["sub_total"] = temp_amount
                amount += temp_amount
            total_amount = "%.2f" % float(amount)
            data = {"success": True, "cart_length":cart_count, "carts":cart_items, "total_amount":total_amount}
            return JsonResponse(data)
        else:
            return JsonResponse({"error":"Token is invalid"})

    except Exception as e:
        return JsonResponse({"error":f"Something went wrong {str(e)}"})

def plus_cart(request):
    if request.method == "GET" and request.user.is_authenticated:
        prod_id = request.GET['prod_id']
        c = Cart.objects.get(Q(product=prod_id) & Q(user=request.user))
        c.quantity += 1
        c.save()
        amount = 0.0
        temp_amount = 0.0
        cart_product = [p for p in Cart.objects.all() if p.user == request.user]
        for p in cart_product:
            temp_amount = ("%.2f" % (float(p.quantity) * float(p.product.discounted_price)))

            amount += float(temp_amount)

        totalamount = round(amount)
        amount = round(float(float(c.product.discounted_price) * int(c.quantity)))
        data = {
                'quantity':c.quantity,
                'price':c.product.discounted_price,
                'amount': amount,
                'totalamount' : totalamount,
                'success':'success'
        }
        return JsonResponse(data, safe=False)
    else:
        data = {
            'error':'auth_error'
        }
        return JsonResponse(data, safe=False)


def minus_cart(request):
    if request.method == "GET" and request.user.is_authenticated:
        prod_id = request.GET['prod_id']
        c = Cart.objects.get(Q(product=prod_id) & Q(user=request.user))
        if (c.quantity > 1):
            c.quantity -= 1
        c.save()
        amount = 0.0
        temp_amount = 0.0
        cart_product = [p for p in Cart.objects.all() if p.user == request.user]
        for p in cart_product:
            temp_amount = (float(p.quantity) * float(p.product.discounted_price))
            amount += float(temp_amount)
        totalamount = round(amount)
        amount = round(float(float(c.product.discounted_price) * int(c.quantity)))
        data = {
                'quantity':c.quantity,
                'amount': amount,
                'price':c.product.discounted_price,
                'totalamount' : totalamount,
                'success': 'success'
        }
        return JsonResponse(data, safe=False)
    else:
        data = {
            'error':'auth_error'
        }
        return JsonResponse(data, safe=False)


def remove_cart(request):
    if request.method == "GET" and request.user.is_authenticated:
        user = request.user
        prod_id = request.GET['prod_id']
        c = Cart.objects.get(Q(product=prod_id) & Q(user=user))
        c.delete()
        amount = 0.0
        cart_product = [p for p in Cart.objects.all() if p.user == user]
        cart_items = len(cart_product)
        for p in cart_product:
            temp_amount = (float(p.quantity) * float(p.product.discounted_price))
            amount += temp_amount
        total_amount = round(amount)
        data = {
            'amount' : amount,
            'totalamount': total_amount,
            'cart_items':cart_items,
            'success':'success'
        }
        return JsonResponse(data)
    else:
        data = {
                    'error':'auth_error'
                }
        return JsonResponse(data, safe=False)

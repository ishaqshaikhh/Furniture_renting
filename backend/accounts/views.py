from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser, Address
from django.contrib.auth import authenticate
import requests
import jwt
from django.conf import settings


BASE_URL = "http://127.0.0.1:8000/"
# TODO: Forgot password
# TODO: Reset password


# POST - Registers the user with required parameters : Login not required
@api_view(["POST"])
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email', '')
        full_name = data.get('full_name', '')
        password = data.get('password', '')
        if email == None or full_name == None or password == None:
            data = {"error":"none fields","message":"Please enter details"}
            return JsonResponse(data)
        data = {"success": "success"}
        # Check the User's  phone number or email already exists
        try:
            CustomUser.objects.get(email=email)
            return JsonResponse({'error': 'user already exists', 'message': 'User with this email already exists'}, status=400)
        except Exception as e:
            pass
            # Creating a new user
            user = CustomUser(email=email)
            user.full_name = full_name
            user.set_password(password)
            user.save()
            
            user = authenticate(email=email, password=password)
            # Checking password
            if user:
                # Logging in user with password
                refresh = RefreshToken.for_user(user)
                data = {"success": "user created successfully","access": str(refresh.access_token),"refresh": str(refresh)}
                return JsonResponse(data)
            else:
                # Authentication failed password is invalid
                data = {"error": "authentication failed","message": "Authentication failed"}
                return JsonResponse(data)
    else:
        data = {"error":"method not allowed","message": "Method not allowed"}
        return JsonResponse(data)

# POST - Logging in user with required parameters : Login not required
@api_view(["POST"])
def login(request):
    if request.method == "POST":
        # Getting user data
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        try:
            # Searching user with phone number
            user = authenticate(email=email, password=password)
            # Checking password
            if user:
                try:
                    ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
                    if ip_address:
                        ip_address = ip_address.split(',')[0]
                    else:
                        ip_address = request.META.get('REMOTE_ADDR')
                    response = requests.get(f"http://ip-api.com/json/{ip_address}")
                    data = response.json()
                    if(data["status"] == "success"):
                        city = data["city"]
                        state = data["regionName"]
                        pincode = data["zip"]
                        new_address = Address(user=user,city=city, state=state, pincode=pincode)
                        new_address.save()
                except Exception as e:
                    return JsonResponse({"error": str(e)})
                # Logging in user with password
                refresh = RefreshToken.for_user(user)
                data = {"success":"success","access": str(refresh.access_token),"refresh": str(refresh)}
                return JsonResponse(data)
            else:
                # Authentication failed password is invalid
                data = {"error": "authentication failed","message": "Please enter valid email and password"}
                return JsonResponse(data)
        except:
            # User not found
            user = None
        if user is None:
            data = {"error": "User not found","message":"User not found"}
            return JsonResponse(data)
    else:
        data = {"error": "Method not Allowed","message":"Method not Allowed"}
        return JsonResponse(data)

@api_view(["GET"])
def get_user(request):
    try:
        token = request.GET.get('token')
        if not token:
            return JsonResponse({"error": "token not found"})
        url = BASE_URL + "api/token/verify/"
        headers = {"Authorization": f"Bearer {token}"}
        body = {"token":token}
        result = requests.get(url, headers=headers, data=body)
        if result.status_code == 200:
            decoded_token = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=["HS256"])
            user_id = decoded_token["user_id"]
            try:
                user = CustomUser.objects.get(id=user_id)
            except:
                user = None
            if user is not None:
                data = {"email": user.email, "name": user.full_name}
                return JsonResponse(data)
            else:
                return JsonResponse({"error": "User not found"})
        else:
            return JsonResponse({"error": "Authentication failed"})
    except Exception as e:
        return JsonResponse({"error": f"Something went wrong {str(e)}"})

@api_view(["GET"])
def profile(request):
    get_profile = Address.objects.get()
    context  = {
        'get_profile': get_profile
    }
    return JsonResponse(context)

def wihslist(request):
    # We have to make this
    pass

def cart(request):
    # We have to make this
    pass

def products(request):
    # We have to make this
    pass

def orders(request):
    #we have to make this
    pass
    

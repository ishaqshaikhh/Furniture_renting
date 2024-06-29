from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser, Address
from django.contrib.auth import authenticate
import requests


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
        # Check if user with phone number or email already exists
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
            # Cheking password
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
def Login(request):
    if request.method == "POST":
        # Getting data
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        try:
            # Searching user with phone number
            user = authenticate(email=email, password=password)
            # Cheking password
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

from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
def handle_404():
    return JsonResponse({'status': 404, 'message': '404 Not Found'})
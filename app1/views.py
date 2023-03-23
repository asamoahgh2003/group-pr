from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def accessories(request):
    return render(request, 'accessories.html')

def laptops(request):
    return render(request, 'laptops.html')

def contact(request):
    return render(request, 'contact.html')

def desktops(request):
    return render(request, 'desktops.html')

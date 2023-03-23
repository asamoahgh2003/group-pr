from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('accessories', views.accessories, name='accessories'),
    path('contact', views.contact, name='contact'),
    path('desktops', views.desktops, name='desktops'),
    path('laptops', views.laptops, name='laptops'),
]

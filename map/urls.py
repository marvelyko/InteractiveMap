from .views import index,add_point,get_points
from django.urls import path

urlpatterns = [
    path('',index),
    path('add_point',add_point),
    path('get_points',get_points)
]
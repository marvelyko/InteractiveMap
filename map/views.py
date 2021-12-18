from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from .forms import PointForm
from .models import Point
# Create your views here.
def index(request):
    return render(request,"index.html",{})


def add_point(request):
    if(request.method == "POST"):
        form = PointForm(request.POST)
        if(form.is_valid()):
            form.save()
    return redirect("/")

def get_points(request):
    points = Point.objects.all()
    return JsonResponse(points)
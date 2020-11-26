from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
# Create your views here.
def resume(request):
    css1 = 'tmp/resume.css'
    params = {"i": css1}
    return render(request,"tmp/resume.html", params)

def home(request):
    return render(request,"tmp/home.html")
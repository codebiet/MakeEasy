from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.shortcuts import redirect
from django.http import HttpResponse
# Create your views here.
def resume(request):
    return render(request,"tmp/resume.html")

def report(request):
    return render(request,"tmp/report.html")

def index(request):
    return render(request,"tmp/index.html")

def temp(request):
    return render(request,"tmp/temp.html")

def login(request):
    if request.method == 'POST':
        email = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=email,password=password)

        if user is not None:
            auth.login(request,user)
            return redirect("/")
        else:
            messages.info(request,"Email or password is incorrect")
            return redirect("login")
    else:
        return render(request,"tmp/login.html")

def signup(request):
    if request.method == 'POST':
        first_name=request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1==password2:
            if User.objects.filter(username=email).exists():
                messages.info(request,"Email Used")
                return redirect('signup')
            else:
                user = User.objects.create_user(username=email,password=password1,email=email,first_name=first_name,last_name=last_name)
                user.save();
                return redirect("login")
        else:
            messages.info(request,"Password doesn't match")
            return redirect('signup')
    else:
        return render(request,"tmp/signup.html")
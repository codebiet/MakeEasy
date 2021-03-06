import email
import threading

from django.shortcuts import render
from django.contrib.auth.models import User, auth
from .models import Visitors
from django.contrib import messages
from django.shortcuts import redirect
from tmp.forms import ContactForm
from django.http import HttpResponse
from django.core.mail import EmailMessage
from django.core.mail import send_mail
from django.conf import settings as conf_sett
from django.contrib.auth import logout
from django.db.models import Q
import random
import os
# Create your views here.

def resume(request):
    if request.user.is_authenticated:
        return render(request, "tmp/resume.html")
    else:
        return redirect("/")

def resumebut(request):
    return render(request,"tmp/resumebut.html")

def repobut(request):
    return render(request,"tmp/repobut.html")

def aboutus(request):
    return render(request,"tmp/aboutus.html")

def resumehandler(request):
    return render(request,"tmp/resumehandler.html")

def resume2(request):
    if request.user.is_authenticated:
        return render(request, "tmp/resume2.html")
    else:
        return redirect("/")

def resume3(request):
    if request.user.is_authenticated:
        return render(request, "tmp/resume3.html")
    else:
        return redirect("/")

def resume4(request):
    if request.user.is_authenticated:
        return render(request, "tmp/resume4.html")
    else:
        return redirect("/")


def report(request):
    if request.user.is_authenticated:
        return render(request, "tmp/report.html")
    else:
        return redirect("/")

def index(request):
    count = User.objects.all().count()
    def get_ip(request):
        address = request.META.get('HTTP_X_FORWARDED_FOR')
        if address:
            ip = address.split(',')[-1].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    ip = get_ip(request)
    u = Visitors(visitor=ip)
    result = Visitors.objects.filter(Q(visitor__icontains=ip))

    if len(result) == 1:
        print("user exist")
    elif len(result)>1:
        print("user exist more")
    else:
        u.save()
        print("user is unique")

    x = Visitors.objects.all().count()
    if request.user.is_authenticated:
        u=User.objects.get(username=request.user)
        n="Hi !! " + u.first_name + " " + u.last_name
        e = u.username
        context = {'name': n, 'total': count,'email':e,'x':x}
        return render(request, "tmp/index.html",context)
    else:
        context = {'total': count,'x':x}
        return render(request,"tmp/index.html",context)



def temp(request):
    return render(request,"tmp/temp.html")

def aboutus(request):
    return render(request,"tmp/aboutus.html")

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
                user.save()
                return redirect("login")
        else:
            messages.info(request,"Password doesn't match")
            return redirect('signup')
    else:
        return render(request,"tmp/signup.html")

def contact(request):
    form = ContactForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        name = instance.name
        email = instance.email
        message = instance.message

        EmailMessage(
            'New message from %s' %name,
            'Hi admin, new message from this email address: %s\n\n Message: %s' %(email, message),
            conf_sett.EMAIL_HOST_USER,
            ['kulvir72510@gmail.com', ],
        ).send()

        form.save()
        messages.info(request, "Message successfully sent")
        return redirect('contact')
    context = {'form': form}
    return render(request, 'tmp/contact.html', context)


def logout_view(request):
    logout(request)
    return render(request, 'tmp/index.html')


# password reset code
def fgt(request):
    return render(request,'tmp/forget.html')

def chk(request):
     if request.method == 'POST':
        global mail
        mail = request.POST['email']
        user = User.objects.get(username = mail)
        if user is not None:
            global otp
            otp = random.randrange(100000, 999999)
            sub = "Password reset"
            message = f""" This is 6 digit code \n{otp}\n This code valid for only 10 minutes """
            send_mail(sub, message, 'official.kulvir92@gmail.com',[mail], fail_silently=False)
            timer = threading.Timer(600.0,confcode)
            timer.start()
            return render(request,'tmp/confmail.html')
        else:
            return HttpResponse('<h1>No user exits in our data</h1>')
     else:
        return HttpResponse('<h1>No user exits in our data</h1>')

# changes code to zero after 10 min
def confcode():
    otp = 00000000

def confmail(request):
    if request.method == "POST":
        code = request.POST['code']
        if code == str(otp):
            return render(request,'tmp/chgpsw.html')
        return HttpResponse("<h1>something fishiii!!!!!!</h1>")

def chgpsw(request):
    if request.method == "POST":
        psw = request.POST['psw1']
        psw2 = request.POST['psw2']
        if psw == psw2 :
            u = User.objects.get(username=mail)
            u.set_password(psw)
            u.save()
            return render(request,'tmp/index.html')
    return HttpResponse("<h1> something went wrong </h1>")
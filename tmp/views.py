from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.shortcuts import redirect
from tmp.forms import ContactForm
from django.http import HttpResponse
from django.core.mail import EmailMessage
from django.conf import settings as conf_sett
from django.contrib.auth import logout
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
from django.urls import path
from . import views
from django.conf.urls import url
from django.conf import settings
from django.contrib.auth.views import auth_logout
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index,name = "index"),
    path('aboutus/',views.aboutus,name ="aboutus"),
    path('login/',views.login,name ="login"),
    path('signup/',views.signup,name ="signup"),
    path('temp/',views.temp,name ="temp"),
    path('report/',views.report,name="report"),
    path('resume/',views.resume,name ="resume"),
    path('resume2/',views.resume2,name ="resume2"),
    path('resume3/',views.resume3,name ="resume3"),
    path('resume4/',views.resume4,name ="resume4"),
    path('contact/',views.contact,name ="contact"),
    path('resumehandler/',views.resumehandler,name ="resumehandler"),
    path('resumebut/',views.resumebut,name ="resumebut"),
    path('repobut/',views.repobut,name ="repobut"),
    path('logout/',views.logout_view,name ="logout"),

]

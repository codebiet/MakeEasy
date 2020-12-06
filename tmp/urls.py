from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name = "index"),
    path('resume/',views.resume,name ="resume"),
    path('aboutus/',views.aboutus,name ="aboutus"),
    path('resumehandler/',views.resumehandler,name ="resumehandler"),
    path('resume2/',views.resume2,name ="resume2"),
    path('resume3/',views.resume3,name ="resume3"),
    path('resume4/',views.resume4,name ="resume4"),
    path('login/',views.login,name ="login"),
    path('signup/',views.signup,name ="signup"),
    path('temp/',views.temp,name ="temp"),
    path('report/',views.report,name="report"),
    path('resume2/',views.resume2,name="resume2"),
]

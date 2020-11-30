from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name = "index"),
    path('resume/',views.resume,name ="resume"),
    path('login/',views.login,name ="login"),
    path('signup/',views.signup,name ="signup"),
    path('temp/',views.temp,name ="temp"),
    path('report/',views.report,name="report"),
    path('resume2/',views.resume2,name="resume2"),
]

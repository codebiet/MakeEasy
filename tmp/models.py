from django.db import models
from django.contrib.auth.forms import User

# Create your models here.
class Meta:
    model = User
    username = ("username",)
    first_name = ("First_name",)
    last_name = ("Last_name",)
    Phone = ("Phone",)


from django.db import models
from django.contrib.auth.forms import User
# Create your models here.
class Meta:
    model = User
    username = ("username",)
    first_name = ("First_name",)
    last_name = ("Last_name",)
    Phone = ("Phone",)

class Contact(models.Model):
    name = models.CharField(max_length=500)
    email = models.EmailField()
    message = models.TextField()

class Visitors(models.Model):
    visitor = models.TextField(default=None)
    def __str__(self):
        return self.visitor

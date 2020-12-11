from django.contrib import admin
from tmp.models import Contact, Visitors

# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')

admin.site.register(Contact, ContactAdmin)
admin.site.register(Visitors)

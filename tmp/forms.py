from django import forms
from tmp.models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
            model = Contact
            fields = "__all__"
    fields = ['name', 'email', 'message']



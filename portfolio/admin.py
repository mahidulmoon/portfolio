from django.contrib import admin
from .models import Portfolio
# Register your models here.
class Showlist(admin.ModelAdmin):
	list_display=('name', 'email')


  
admin.site.register(Portfolio,Showlist)
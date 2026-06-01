from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "number", "sent_on")
    list_filter = ("sent_on",)
    search_fields = ("name", "email", "message")
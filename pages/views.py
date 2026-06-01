from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact

def home(request):
    sent = False

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        number = request.POST.get("number")
        message = request.POST.get("message")

        # Save to database
        Contact.objects.create(
            name=name,
            email=email,
            number=number,
            message=message
        )

        # 1️⃣ Email to YOU
        send_mail(
            subject=f"New Message from {name}",
            message=f"Name: {name}\nEmail: {email}\nPhone: {number}\n\nMessage:\n{message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        # 2️⃣ Auto-reply to USER
        send_mail(
            subject="Thanks for contacting me!",
            message="I received your message and will reply soon! Thank you for your patience 😊",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False,
        )

        sent = True

    return render(request, "pages/index.html", {"sent": sent})
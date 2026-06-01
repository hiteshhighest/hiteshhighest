from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    number = models.CharField(max_length=20)
    message = models.TextField()
    sent_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
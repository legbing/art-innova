from django.db import models

# Create your models here.
class React(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=500)
    password = models.CharField(max_length=100)
    usertype = models.CharField(max_length=100)
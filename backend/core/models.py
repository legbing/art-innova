from django.db import models

# Create your models here.
class React(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=500)
    password = models.CharField(max_length=100)
    usertype = models.CharField(max_length=100)

class Work(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    pic = models.ImageField(upload_to='images/')

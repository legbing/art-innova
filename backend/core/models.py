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
    description = models.TextField(null=True)
    cost = models.FloatField(default=0.00)

    def __str__(self):
        return self.title

class Event(models.Model):
    exhibit = models.CharField(max_length=200)
    gallery = models.CharField(max_length=200)
    theme = models.CharField(max_length=200)
    ad = models.ImageField(upload_to='events/')
    artists = models.JSONField()

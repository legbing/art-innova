from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['name', 'email','password','usertype']

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ['title', 'author', 'pic']

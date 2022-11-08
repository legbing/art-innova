from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReactSerializer
from .models import React
# Create your views here.
@api_view(['GET', 'POST'])
def form(request):

    if request.method == 'GET':
        detail = React.objects.all()
        serializer = ReactSerializer(detail, many=True)
        return Response(serializer.data)
    

    elif request.method == 'POST':
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def form_login(request):
    if request.method == 'POST':
        #serializer = ReactSerializer(data=request.data)
        print(request.data)
        if React.objects.filter(email=request.data['email'],password=request.data['password']).exists():
            return Response(status=200)
        return Response(status=404)
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReactSerializer, ArtSerializer
from .models import React, Work
import json
# Create your views here.
@api_view(['GET', 'POST'])
def form(request):
    print(request.data)
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
            obj = React.objects.filter(email=request.data['email']).first()

            return Response(data=[obj.name, obj.usertype], status=200)
        return Response(status=404)

@api_view(['GET', 'POST'])
def upload_art(request):
    print(request.data)
    if request.method == 'POST':
        print(request.data.get("title"))
        print(request.data.get("author"))
        print(request.data.get("pic"))
        serializer = ArtSerializer(data = {'title':request.data.get('title'), 'author':request.data.get('author'),
                    'pic':request.data.get('pic'), 'description':request.data.get('description'), 'cost':request.data.get('cost')})

        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "GET":
        data = Work.objects.all()
        serializer =ArtSerializer(data, context={'request': request}, many=True)
        #print("Data: ",serializer.data)
        return Response(serializer.data)

@api_view(['GET'])
def get_artist_art(request, user):

    data = Work.objects.filter(author = user)
    serializer =ArtSerializer(data, context={'request': request}, many=True)
    #print("Data: ",serializer.data)
    return Response(serializer.data)

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReactSerializer, ArtSerializer, EventSerializer
from .models import React, Work, Event
import json
import re
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

@api_view(['GET', 'POST'])
def add_event(request):
    print(request.data)
    if request.method == 'POST':

        serializer = EventSerializer(data = {'exhibit':request.data.get('exhibit'), 'gallery':request.data.get('gallery'),
                    'ad':request.data.get('ad'), 'theme':request.data.get('theme'), 'artists':request.data.get('artists'),
                    'date':request.data.get('date'), 'time':request.data.get('time')})

        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "GET":
        data = Event.objects.all()
        serializer =EventSerializer(data, context={'request': request}, many=True)
        #print("Data: ",serializer.data)
        return Response(serializer.data)

@api_view(['GET'])
def get_event(request, gallery):

    data = Event.objects.filter(gallery = gallery)

    serializer =EventSerializer(data, context={'request': request}, many=True)
    print(serializer.data)
    #print("Data: ",serializer.data)
    return Response(serializer.data)

@api_view(['GET'])
def get_event_by_artist(request, artist):

    data = Event.objects.values_list('artists', flat=True)
    data1 = Event.objects.none()
    for m in range(len(data)):
        artists = data[m].strip(',').split(',')
        id = -1
        for i in artists:
            if(i == artist):
                id = m+1
                print(id)
                break
        if(id != -1):
            data1 |= Event.objects.filter(id = id)

    serializer =EventSerializer(data1, context={'request': request}, many=True)
    #print("Artists: ", serializervalues_list('eng_name', flat=True))
    #print(serializer.data)
    #print("Data: ",serializer.data)
    return Response(serializer.data)

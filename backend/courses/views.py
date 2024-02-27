from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializer import *
from .models import *

# Create your views here.


class CourseView(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

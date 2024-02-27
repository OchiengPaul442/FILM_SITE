from django.urls import path
from .views import *

urlpatterns = [
    path('courses/', CourseView.as_view(), name='courses'),
]

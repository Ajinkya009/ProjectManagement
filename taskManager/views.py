from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.core import serializers
from .serializers import ProjectSerializer,TaskSerializer
from .models import Project,Task
from django.db.models import Q

# Create your views here.

class ProjectViewSet(viewsets.ModelViewSet):
	"""
	This viewset provides Project functionality
	"""
	permission_classes = [IsAuthenticated]
	serializer_class = ProjectSerializer
	queryset = Project.objects.all()
	
	def perform_create(self, serializer):
		serializer.save(admin=self.request.user)
	
	def get_queryset(self):
		"""
		Return distinct projects which satisfy following conditions:
		1. User is owner of that project
		2. User is assigned a task from that project
		"""
		user = self.request.user
		return Project.objects.filter(Q(admin=user) | Q(tasks__assignee=user)).distinct()

class TaskViewSet(viewsets.ModelViewSet):
	"""
	This viewset provides Task functionality
	"""
	permission_classes = [IsAuthenticated]
	serializer_class = TaskSerializer
	queryset = Task.objects.all()

	def get_queryset(self):
		project = self.kwargs['projectId']
		return Task.objects.filter(project=project)


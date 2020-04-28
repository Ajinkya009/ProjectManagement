from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):
	admin			=	models.ForeignKey(User,on_delete=models.CASCADE)
	name			=	models.CharField(max_length=100)
	description		=	models.TextField(max_length=300)
	startDate		=	models.DateField()
	endDate			=	models.DateField()


class Task(models.Model):
	project			=	models.ForeignKey(Project,related_name='tasks',on_delete=models.CASCADE)
	name			=	models.CharField(max_length=100)
	description		=	models.TextField(max_length=100)
	startDate		=	models.DateField()
	endDate			=	models.DateField()
	status			=	models.BooleanField(default=False)
	assignee		=	models.ForeignKey(User,on_delete=models.CASCADE)


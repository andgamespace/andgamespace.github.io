from django.shortcuts import render
from rest_framework import serializers
from .models import Post
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']
# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

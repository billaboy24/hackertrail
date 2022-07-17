from .models import Request
from rest_framework import serializers


class RequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Request
        fields = ['id', 'title', 'description', 'client_Name', 'priority',
                  'target_Date', 'product_Area']

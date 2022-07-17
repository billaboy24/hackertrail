
from django.db import models


class Request(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    client_Name = models.CharField(max_length=100)
    priority = models.CharField(max_length=100)
    target_Date = models.DateField()
    product_Area = models.CharField(max_length=100)

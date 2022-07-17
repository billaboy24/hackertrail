
from django.http import JsonResponse
from .models import Request
from .serializers import RequestSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def request_list(request, format=None):

    if request.method == 'GET':

        reqs = Request.objects.all()
        serializer = RequestSerializer(reqs, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':

        serializer = RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@ api_view(['GET', 'PUT', 'DELETE'])
def request_detail(request, id, format=None):
    try:
        req = Request.objects.get(pk=id)

    except Request.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RequestSerializer(req)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RequestSerializer(req, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        req.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

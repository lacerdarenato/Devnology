from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from .models import Veiculo
from .serializer import VeiculoSerializer


@csrf_exempt
def VehicleViewSet(request):
    if request.method == 'GET':
        veiculo = Veiculo.objects.all()
        veiculo_Serializer = VeiculoSerializer(veiculo, many=True)
        return JsonResponse(veiculo_Serializer.data, safe=False)

    elif request.method == 'POST':
        veiculo_data = JSONParser().parse(request)
        veiculo_Serializer = VeiculoSerializer(data=veiculo_data)
        if veiculo_Serializer.is_valid():
            veiculo_Serializer.save()
            return JsonResponse("Veículo cadastrado com sucesso!", safe=False)
        return JsonResponse("Erro ao cadastrar o veículo!", safe=False)

    elif request.method == 'PUT':
        veiculo_data = JSONParser().parse(request)
        veiculo = VeiculoSerializer(id=veiculo_data['id'])
        veiculo_Serializer = VeiculoSerializer(veiculo, data=veiculo_data)
        veiculo_Serializer.save()
        if veiculo_Serializer.is_valid():
            veiculo_Serializer.save()
            return JsonResponse("Veículo atualizado com sucesso!", safe=False)
        return JsonResponse("Erro ao atualizar o veículo!", safe=False)

    elif request.method == 'DELETE':
        veiculo = Veiculo.objetcts.get(id=id)
        veiculo.delete()
        return JsonResponse("Veículo deletado com sucesso!", safe=False)
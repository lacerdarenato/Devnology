from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from .models import Venda
from .serializer import VendaSerializer
from Veiculos.models import Veiculo
from Veiculos.serializer import VeiculoSerializer


@csrf_exempt
def VendaViewSet(request):
    if request.method == 'GET':
        venda = Venda.objects.all()
        venda_serializer = VendaSerializer(venda, many=True)
        return JsonResponse(venda_serializer.data, safe=False)

    elif request.method == 'POST':
        venda_data = JSONParser().parse(request)
        veiculo = Veiculo.objects.get(id=venda_data['veiculo'])
        venda_data['comissao'] = (int(venda_data['valor']) - veiculo.valorCompra) / 10
        venda_serializer = VendaSerializer(data=venda_data)
        print(veiculo.situacao)
        print(venda_data)
        if venda_serializer.is_valid():
            venda_serializer.save()
            return JsonResponse("Veículo vendido!", safe=False)
        return JsonResponse("Erro ao realizar a venda!", safe=False)

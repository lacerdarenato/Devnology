from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from .models import Venda
from .serializer import VendaSerializer


@csrf_exempt
def VendaViewSet(request, id=0):
    if request.method == 'GET':
        venda = Venda.objects.all()
        venda_serializer = VendaSerializer(venda, many=True)
        return JsonResponse(venda_serializer.data, safe=False)

    elif request.method == 'POST':
        print("entrou venda api")
        venda_data = JSONParser().parse(request)
        venda_serializer = VendaSerializer(data=venda_data)
        if venda_serializer.is_valid():
            venda_serializer.save(commit=False)
            venda_serializer.comissao = venda_data.veiculo.valorCompra * 0.1
            venda_serializer.save()
            return JsonResponse("Veículo vendido!")
        return JsonResponse("Erro ao realizar a venda!")

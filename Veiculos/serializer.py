from rest_framework import serializers
from .models import Veiculo


class VeiculoSerializer(serializers.ModelSerializer):
    #situacao = serializers.CharField(source='get_situacao_display')

    class Meta:
        model = Veiculo
        fields = '__all__'

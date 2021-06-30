from django.db import models
from Veiculos.models import Veiculo


class Venda(models.Model):

    veiculo = models.OneToOneField("Veiculos.Veiculo", on_delete=models.CASCADE)
    dataDeVenda = models.DateField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    comissao = models.DecimalField(max_digits=9, decimal_places=2)

    def __str__(self):
        return self.veiculo

from django.db import models


class Veiculo (models.Model):

    modelo = models.CharField(max_length=30)
    marca = models.CharField(max_length=30)
    ano = models.IntegerField(max_length=4)
    cor = models.CharField(max_length=30)
    placa = models.CharField(max_length=7)
    chassi = models.CharField(max_length=17, unique=True)
    dataCompra = models.DateField(auto_now_add=True)
    valorCompra = models.DecimalField(decimal_places=2)

    def __str__(self):
        return self.modelo

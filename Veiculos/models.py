from django.db import models


class Veiculo (models.Model):
    escolhaStatus = (
        ('1', 'Disponivel'),
        ('2', 'Vendido')
    )

    modelo = models.CharField(max_length=30)
    marca = models.CharField(max_length=30)
    ano = models.DecimalField(max_digits=4, decimal_places=0)
    cor = models.CharField(max_length=30)
    placa = models.CharField(max_length=7)
    chassi = models.CharField(max_length=17, unique=True)
    dataCompra = models.DateField(auto_now_add=True)
    valorCompra = models.DecimalField(max_digits=10, decimal_places=2)
    situacao = models.CharField(max_length=1, choices=escolhaStatus)

    def __str__(self):
        return self.modelo

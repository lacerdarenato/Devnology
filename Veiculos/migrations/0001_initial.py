# Generated by Django 3.2.4 on 2021-06-27 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Veiculo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.CharField(max_length=30)),
                ('marca', models.CharField(max_length=30)),
                ('ano', models.DecimalField(decimal_places=0, max_digits=4)),
                ('cor', models.CharField(max_length=30)),
                ('placa', models.CharField(max_length=7)),
                ('chassi', models.CharField(max_length=17, unique=True)),
                ('dataCompra', models.DateField(auto_now_add=True)),
                ('valorCompra', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]

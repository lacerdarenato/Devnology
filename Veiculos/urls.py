from django.urls import path
from . import views

urlpatterns = [
    path('', views.VehicleViewSet),
    path('<int:id>', views.VehicleViewSet),
    path('listardisponiveis', views.listAvailableVehicles),
    path('listarvendidos', views.listSaleVehicles),

]
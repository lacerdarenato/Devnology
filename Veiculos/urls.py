from django.urls import path
from . import views

urlpatterns = [
    path('', views.VehicleViewSet),
    path('<int:id>', views.VehicleViewSet)
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.VendaViewSet),
    path('<int:id>', views.VendaViewSet)
]
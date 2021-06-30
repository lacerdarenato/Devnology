import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-veiculo',
  templateUrl: './show-del-veiculo.component.html',
  styleUrls: ['./show-del-veiculo.component.css']
})
export class ShowDelVeiculoComponent implements OnInit {

  constructor(private service:SharedService) { }

  VehicleList:any=[];
  
  ModalTitle?: string;
  ActivateAddEditVehicleComp: boolean=false;
  vehi:any;

  ngOnInit(): void {
    this.refreshVehicleList();
  }

  addClick(){
    console.log("teste");
    this.vehi={
      id:0,
      modelo:"",
      marca:"",
      ano:"",
      cor:"",
      placa:"",
      chassi:"",
      valorCompra:"",
      situacao:""
    }
    this.ModalTitle="Insira os dados do veículo a ser comprado";
    this.ActivateAddEditVehicleComp=true;
  }

  closeClick(){
    this.ActivateAddEditVehicleComp=false;
    this.refreshVehicleList();
  }

  refreshVehicleList(){
    this.service.getVehicleList().subscribe(data=>{
      this.VehicleList = data;
    });
  }

}

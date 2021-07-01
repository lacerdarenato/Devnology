import { Component, OnInit } from '@angular/core';
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
  ActivateAddEditSaleComp: boolean=false;
  vehi:any;
  vend:any;

  ngOnInit(): void {
    this.refreshVehicleList();
  }

  addClick(){
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
    this.ActivateAddEditSaleComp=false;
    this.refreshVehicleList();
  }

  editClick(item:any){
    this.vehi = item;
    this.ModalTitle = "Editando dados do Veículo";
    this.ActivateAddEditVehicleComp=true;
  }

  deleteClick(item:any){
    if(confirm("Deseja Mesmo Deletar?")){
      this.service.deleteVehicle(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshVehicleList();
      })
    }
  }

  saleClick(item:any){
    this.vehi = item;
    this.ModalTitle = "Digite o valor da venda";
    this.ActivateAddEditSaleComp=true;
    console.log("saleClick");
    console.log(this.vehi);
  }

  refreshVehicleList(){
    this.service.getVehicleList().subscribe(data=>{
      this.VehicleList = data;
    });
  }

}

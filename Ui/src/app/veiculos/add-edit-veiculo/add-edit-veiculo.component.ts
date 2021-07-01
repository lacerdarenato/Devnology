import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-veiculo',
  templateUrl: './add-edit-veiculo.component.html',
  styleUrls: ['./add-edit-veiculo.component.css']
})
export class AddEditVeiculoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() vehi:any;
  id: number | undefined;
  modelo: string | undefined;
  marca: string | undefined;
  ano: number | undefined;
  cor: string | undefined;
  placa: string | undefined;
  chassi: string | undefined;
  valorCompra: number | undefined;
  situacao: string | undefined;

  ngOnInit(): void {
    this.id = this.vehi.id;
    this.modelo = this.vehi.modelo;
    this.marca = this.vehi.marca;
    this.ano = this.vehi.ano;
    this.cor = this.vehi.cor;
    this.placa = this.vehi.placa;
    this.chassi = this.vehi.chassi;
    this.valorCompra = this.vehi.valorCompra;
    this.situacao = this.vehi.situacao;
  }

  addVehicle(){
    var val = {
      id: this.id,
      modelo: this.modelo,
      marca: this.marca,
      ano: this.ano,
      cor: this.cor,
      placa: this.placa,
      chassi: this.chassi,
      valorCompra: this.valorCompra,
      situacao: this.situacao,
    };
    this.service.addVehicle(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateVehicle(item:any){
    var val = {
      id: this.id,
      modelo: this.modelo,
      marca: this.marca,
      ano: this.ano,
      cor: this.cor,
      placa: this.placa,
      chassi: this.chassi,
      valorCompra: this.valorCompra,
      situacao: this.situacao,
    };
    console.log(val.situacao);
    this.service.updateVehicle(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}

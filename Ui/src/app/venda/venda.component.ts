import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  constructor(private service:SharedService) { }

  VendaList: any=[];

  ngOnInit(): void {
    this.refreshVehicleList();
  }

  refreshVehicleList(){
    this.service.getVendaList().subscribe(data=>{
      this.VendaList = data;
    });
  }

}

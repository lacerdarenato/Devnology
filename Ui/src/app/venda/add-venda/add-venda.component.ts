import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-venda',
  templateUrl: './add-venda.component.html',
  styleUrls: ['./add-venda.component.css']
})
export class AddVendaComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() vehi:any;
  veiculo: number | undefined;
  valor: number | undefined;

  ngOnInit(): void {
    
  }

  addVenda(item:any){
    console.log(item)
    var val = {
      veiculo: item.id,
      valor: this.valor,
    }
    console.log(val.valor);
    this.service.saleVehicle(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}

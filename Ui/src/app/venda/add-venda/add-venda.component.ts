import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-venda',
  templateUrl: './add-venda.component.html',
  styleUrls: ['./add-venda.component.css']
})
export class AddVendaComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() vend:any;
  id: number | undefined;
  veiculo: string | undefined;
  data: Date | undefined;
  valor: number | undefined;
  comissao: number | undefined;

  ngOnInit(): void {
    
  }

  addVenda(item:any){

    console.log(item);
    this.id = this.vend.id;
    this.veiculo = this.vend.veiculo;
    this.data = this.vend.data;
    this.valor = this.vend.valor;
    this.comissao = this.vend.comissao;
  }

}

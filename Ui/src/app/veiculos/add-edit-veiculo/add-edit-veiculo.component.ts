import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-veiculo',
  templateUrl: './add-edit-veiculo.component.html',
  styleUrls: ['./add-edit-veiculo.component.css']
})
export class AddEditVeiculoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() tk:any;
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  concluded: string | undefined;

  ngOnInit(): void {
  }

}

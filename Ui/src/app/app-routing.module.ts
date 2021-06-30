import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VeiculosComponent } from './veiculos/veiculos.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  {path:'veiculos', component:VeiculosComponent},
  {path:'vendas', component:VendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

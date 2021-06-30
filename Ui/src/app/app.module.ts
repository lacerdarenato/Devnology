import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ShowDelVeiculoComponent } from './veiculos/show-del-veiculo/show-del-veiculo.component';
import { AddEditVeiculoComponent } from './veiculos/add-edit-veiculo/add-edit-veiculo.component';
import { VendaComponent } from './venda/venda.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    ShowDelVeiculoComponent,
    AddEditVeiculoComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

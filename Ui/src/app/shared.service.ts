import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";

  constructor( private http:HttpClient) { }

  getVehicleList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'veiculos/');
  }

  addVehicle(val:any){
    return this.http.post(this.APIUrl + 'veiculos/', val);
  }

  updateVehicle(val:any){
    return this.http.put(this.APIUrl + 'veiculos/', val);
  }

  deleteVehicle(val:any){
    return this.http.delete(this.APIUrl + 'veiculos/', val);
  }

  saleVehicle(val:any){
    return this.http.post(this.APIUrl + 'vendas/', val);
  }

  listCommission():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'vendas/');
  }
}

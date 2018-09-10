import { Veiculo } from './../class/veiculo';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VeiculoService {

  private url: string = "http://177.85.0.23:2222/security/veiculos";

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.url);
  }

  getVeiculo(id): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.getVeiculoUrl(id));
  }

  addVeiculo(veiculo) {
    return this.http.post(this.url, JSON.stringify(veiculo));
  }

  updateVeiculo(veiculo) {
    return this.http.put(this.getVeiculoUrl(veiculo.id), JSON.stringify(veiculo));
  }

  deleteVeiculo(id) {
    return this.http.delete(this.getVeiculoUrl(id));
  }

  private getVeiculoUrl(id) {
    return this.url + "/" + id;
  }
}

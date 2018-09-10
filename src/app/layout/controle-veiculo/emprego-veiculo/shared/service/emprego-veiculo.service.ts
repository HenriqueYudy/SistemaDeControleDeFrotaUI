import { HttpClient } from '@angular/common/http';
import { EmpregoVeiculo } from './../class/emprego-veiculo';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpregoVeiculoService {

  private url: string = "http://177.85.0.23:2222/security/emprego_veiculo";

  constructor(private http: HttpClient) { }

  getEmpregoVeiculos(): Observable<EmpregoVeiculo[]> {
    return this.http.get<EmpregoVeiculo[]>(this.url);
  }

  getEmpregoVeiculo(id): Observable<EmpregoVeiculo> {
    return this.http.get<EmpregoVeiculo>(this.getEmpregoVeiculoUrl(id));
  }

  addEmpregoVeiculo(empregoVeiculo) {
    return this.http.post(this.url, JSON.stringify(empregoVeiculo));
  }

  updateEmpregoVeiculo(empregoVeiculo) {
    return this.http.put(this.getEmpregoVeiculoUrl(empregoVeiculo.id), JSON.stringify(empregoVeiculo));
  }

  deleteEmpregoVeiculo(id) {
    return this.http.delete(this.getEmpregoVeiculoUrl(id));
  }


  private getEmpregoVeiculoUrl(id) {
    return this.url + "/" + id;
  }
}

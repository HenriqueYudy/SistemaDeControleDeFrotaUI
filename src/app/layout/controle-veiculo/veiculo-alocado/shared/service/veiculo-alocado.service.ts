import { Observable } from 'rxjs/Observable';
import { VeiculoAlocado } from './../class/veiculo-alocado';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VeiculoAlocadoService {

  private url: string = "http://177.85.0.23:2222/security/veiculo_alocado";

  constructor(private http: HttpClient) { }


  getVeiculoAlocados(): Observable<VeiculoAlocado[]> {
    return this.http.get<VeiculoAlocado[]>(this.url)
  }

  getVeiculoAlocado(id): Observable<VeiculoAlocado> {
    return this.http.get<VeiculoAlocado>(this.getVeiculoAlocadoUrl(id))
  }

  addVeiculoAlocado(veiculoAlocado) {
    return this.http.post(this.url, JSON.stringify(veiculoAlocado));
  }

  updateVeiculoAlocado(veiculoAlocado) {
    return this.http.put(this.getVeiculoAlocadoUrl(veiculoAlocado.id), JSON.stringify(veiculoAlocado));
  }

  deleteVeiculoAlocado(id) {
    return this.http.delete(this.getVeiculoAlocadoUrl(id));
  }


  private getVeiculoAlocadoUrl(id) {
    return this.url + "/" + id;
  }
}

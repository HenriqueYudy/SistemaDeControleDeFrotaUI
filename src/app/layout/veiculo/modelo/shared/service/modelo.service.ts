import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Modelo } from '../class/modelo';

@Injectable()
export class ModeloService {

  private url: string = "http://177.85.0.23:2222/security/modelos";

  constructor(private http: HttpClient) { }


  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.url);
  }

  getModelo(id): Observable<Modelo> {
    return this.http.get<Modelo>(this.getModeloUrl(id));
  }

  addModelo(modelo) {
    return this.http.post(this.url, JSON.stringify(modelo));
  }

  updateModelo(modelo) {
    return this.http.put(this.getModeloUrl(modelo.id), JSON.stringify(modelo));
  }

  deleteModelo(id) {
    return this.http.delete(this.getModeloUrl(id));
  }

  private getModeloUrl(id) {
    return this.url + "/" + id;
  }
}

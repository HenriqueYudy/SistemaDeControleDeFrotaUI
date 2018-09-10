import { HttpClient } from '@angular/common/http';
import { Coordenada } from './../class/coordenada';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class CoordenadaService {

  private url: string = "http://177.85.0.23:2222/security/coordenadas";

  constructor(private http: HttpClient) { }


  getCoordenadas(): Observable<Coordenada[]> {
    return this.http.get<Coordenada[]>(this.url);
  }

  getCoordenada(id): Observable<Coordenada[]> {
    return this.http.get<Coordenada[]>(this.getCoordenadaUrl(id));
  }

  addCoordenada(coordenada) {
    return this.http.post(this.url, JSON.stringify(coordenada));
  }

  updateCoordenada(coordenada) {
    return this.http.put(this.getCoordenadaUrl(coordenada.id), JSON.stringify(coordenada));
  }

  deleteCoordenada(id) {
    return this.http.delete(this.getCoordenadaUrl(id));
  }


  private getCoordenadaUrl(id) {
    return this.url + "/" + id;
  }

}

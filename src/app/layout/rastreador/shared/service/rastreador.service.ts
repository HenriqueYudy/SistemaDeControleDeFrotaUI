import { Rastreador } from './../class/rastreador';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class RastreadorService {

  private url: string = "http://177.85.0.23:2222/security/rastreador";

  constructor(private http: HttpClient) { }



  getRastreadores(): Observable<Rastreador[]> {
    return this.http.get<Rastreador[]>(this.url);
  }

  getRastreador(id): Observable<Rastreador> {
    return this.http.get<Rastreador>(this.getRastreadorUrl(id));
  }

  addRastreador(Rastreador) {
    return this.http.post(this.url, JSON.stringify(Rastreador));
  }


  updateRastreador(Rastreador) {
    return this.http.put(this.getRastreadorUrl(Rastreador.id), JSON.stringify(Rastreador));
  }


  deleteRastreador(id) {
    return this.http.delete(this.getRastreadorUrl(id));
  }


  private getRastreadorUrl(id) {
    return this.url + "/" + id;
  }


}

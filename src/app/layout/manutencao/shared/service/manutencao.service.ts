import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Manutencao } from '../class/manutencao';


@Injectable()
export class ManutencaoService {


  private url: string = "http://177.85.0.23:2222/security/manutencao";

  constructor(private http: HttpClient) { }


  getManutencoes(): Observable<Manutencao[]> {
    return this.http.get<Manutencao[]>(this.url)
  }

  getManutencao(id): Observable<Manutencao> {
    return this.http.get<Manutencao>(this.getManutencaoUrl(id));
  }

  addManuntencao(manutencao) {
    return this.http.post(this.url, JSON.stringify(manutencao));
  }

  updateManutencao(manutencao) {
    return this.http.put(this.getManutencaoUrl(manutencao.id), JSON.stringify(manutencao));
  }

  deleteManutencao(id) {
    return this.http.delete(this.getManutencaoUrl(id));
  }

  private getManutencaoUrl(id) {
    return this.url + "/" + id;
  }
}

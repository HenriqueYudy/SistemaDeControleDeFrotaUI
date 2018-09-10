import { Abastecimento } from './../class/abastecimento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class AbastecimentoService {

  private url: string = "http://177.85.0.23:2222/security/abastecimento";

  constructor(private http: HttpClient) { }

  getAbastecimentos(): Observable<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(this.url);
  }

  getAbastecimento(id): Observable<Abastecimento> {
    return this.http.get<Abastecimento>(this.getAbastecimentoUrl(id));
  }

  addAbastecimento(abastecimento) {
    return this.http.post(this.url, JSON.stringify(abastecimento));
  }

  updateAbastecimento(abastecimento) {
    return this.http.put(this.getAbastecimentoUrl(abastecimento.id), JSON.stringify(abastecimento));
  }

  deleteAbastecimento(id) {
    return this.http.delete(this.getAbastecimentoUrl(id));
  }


  private getAbastecimentoUrl(id) {
    return this.url + "/" + id;
  }


}

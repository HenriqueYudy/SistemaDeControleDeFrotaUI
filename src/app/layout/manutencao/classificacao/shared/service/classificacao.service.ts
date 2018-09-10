import { HttpClient } from '@angular/common/http';
import { Classificacao } from './../class/classificacao';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ClassificacaoService {


  private url: string = "http://177.85.0.23:2222/security/classificacao";

  constructor(private http: HttpClient) { }


  getClassificacoes(): Observable<Classificacao[]> {
    return this.http.get<Classificacao[]>(this.url)
  }

  getClassificacao(id): Observable<Classificacao> {
    return this.http.get<Classificacao>(this.getClassificacaoUrl(id))
  }

  addClassificacao(classificacao) {
    return this.http.post(this.url, JSON.stringify(classificacao));
  }

  updateClassificacao(classificacao) {
    return this.http.put(this.getClassificacaoUrl(classificacao.id), JSON.stringify(classificacao));
  }

  deleteClassificacao(id) {
    return this.http.delete(this.getClassificacaoUrl(id));
  }


  private getClassificacaoUrl(id) {
    return this.url + "/" + id;
  }
}

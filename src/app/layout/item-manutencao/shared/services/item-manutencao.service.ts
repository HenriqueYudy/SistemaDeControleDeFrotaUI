import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ItemManutencao } from '../class/item-manutencao';

@Injectable()
export class ItemManutencaoService {

  url: string = "http://177.85.0.23:2222/security/item_manutencao";

  constructor(private http: HttpClient) { }



  getItemManutencoes(): Observable<ItemManutencao[]> {
    return this.http.get<ItemManutencao[]>(this.url);
  }

  getItemManutencao(id): Observable<ItemManutencao> {
    return this.http.get<ItemManutencao>(this.getItemManutencaoUrl(id));
  }

  addItemManutencao(itemManutencao) {
    return this.http.post(this.url, JSON.stringify(itemManutencao));
  }

  updateItemManutencao(itemManutencao) {
    return this.http.put(this.getItemManutencaoUrl(itemManutencao.id), JSON.stringify(itemManutencao));
  }

  deleteItemManutencao(id) {
    return this.http.delete(this.getItemManutencaoUrl(id));
  }

  getItemManutencaoUrl(id) {
    return this.url + "/" + id;
  }
}

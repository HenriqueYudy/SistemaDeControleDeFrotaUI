import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frota } from '../class/frota';

@Injectable()
export class FrotaService {

  private url: string = "http://177.85.0.23:2222/security/frotas";

  constructor(private http: HttpClient) { }


  getFrotas(): Observable<Frota[]> {
    return this.http.get<Frota[]>(this.url);
  }

  getFrota(id): Observable<Frota> {
    return this.http.get<Frota>(this.getFrotaUrl(id));
  }

  addFrota(frota) {
    return this.http.post(this.url, JSON.stringify(frota));
  }

  updateFrota(frota) {
    return this.http.put(this.getFrotaUrl(frota.id), JSON.stringify(frota));
  }

  deleteFrota(id) {
    return this.http.delete(this.getFrotaUrl(id));
  }

  private getFrotaUrl(id) {
    return this.url + "/" + id;
  }

}

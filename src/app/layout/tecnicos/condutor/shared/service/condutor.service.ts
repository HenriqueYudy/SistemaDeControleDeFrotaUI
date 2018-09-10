import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Condutor } from '../class/condutor';


@Injectable()
export class CondutorService {

  private url: string = "http://177.85.0.23:2222/security/condutor";

  constructor(private http: HttpClient) { }


  getCondutores(): Observable<Condutor[]> {
    return this.http.get<Condutor[]>(this.url);
  }

  getCondutor(id): Observable<Condutor> {
    return this.http.get<Condutor>(this.getCondutorUrl(id));
  }

  addCondutor(condutor) {
    return this.http.post(this.url, JSON.stringify(condutor));
  }

  updateCondutor(condutor) {
    return this.http.put(this.getCondutorUrl(condutor.id), JSON.stringify(condutor));
  }

  deleteCondutor(id) {
    return this.http.delete(this.getCondutorUrl(id));
  }

  private getCondutorUrl(id) {
    return this.url + "/" + id;
  }
}

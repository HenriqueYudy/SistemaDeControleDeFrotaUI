import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Marca } from '../class/marca';


@Injectable()
export class MarcaService {

  private url: string = "http://177.85.0.23:2222/security/marcas";


  constructor(private http: Http, private httpClient: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.httpClient.get<Marca[]>(this.url);
  }

  getMarca(id): Observable<Marca> {
    return this.httpClient.get<Marca>(this.getMarcaUrl(id));
  }

  addMarca(marca) {
    return this.httpClient.post(this.url, JSON.stringify(marca));
  }

  updateMarca(marca) {
    return this.httpClient.put(this.getMarcaUrl(marca.id), JSON.stringify(marca));
  }

  deleteMarca(id) {
    return this.httpClient.delete(this.getMarcaUrl(id));

  }

  private getMarcaUrl(id) {
    return this.url + "/" + id;
  }

}

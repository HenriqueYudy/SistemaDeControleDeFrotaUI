import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../class/fornecedor';

@Injectable()
export class FornecedorService {

  private url: string = "http://177.85.0.23:2222/security/fornecedor";

  constructor(private http: HttpClient) { }


  getFornecedores():Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url);
  }

  getFornecedor(id): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(this.getFornecedorUrl(id));
  }

  addFornecedor(fornecedor) {
    return this.http.post(this.url, JSON.stringify(fornecedor));
  }

  updateFornecedor(fornecedor) {
    return this.http.put(this.getFornecedorUrl(fornecedor.id), JSON.stringify(fornecedor));
  }

  deleteFornecedor(id) {
    return this.http.delete(this.getFornecedorUrl(id));
  }

  private getFornecedorUrl(id) {
    return this.url + "/" + id;
  }
}

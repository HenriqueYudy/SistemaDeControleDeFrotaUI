import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Empresa } from '../class/empresa';


@Injectable()
export class EmpresaService {

  private url: string = "http://177.85.0.23:2222/security/empresas";

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  getEmpresa(id): Observable<Empresa> {
    return this.http.get<Empresa>(this.getEmpresaUrl(id));
  }

  addEmpresa(empresa) {
    return this.http.post(this.url, JSON.stringify(empresa));
  }

  updateEmpresa(empresa) {
    return this.http.put(this.getEmpresaUrl(empresa.id), JSON.stringify(empresa));
  }

  deleteEmpresa(id) {
    return this.http.delete(this.getEmpresaUrl(id));
  }


  private getEmpresaUrl(id) {
    return this.url + "/" + id;
  }
}

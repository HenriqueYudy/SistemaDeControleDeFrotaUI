import { Permissao } from './../class/permissao';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PermissaoService {

  private url: string = "http://177.85.0.23:2222/security/permissoes";

  constructor(private http: HttpClient) { }


  getPermissoes(): Observable<Permissao[]> {
    return this.http.get<Permissao[]>(this.url);
  }

  getPermissao(id): Observable<Permissao> {
    return this.http.get<Permissao>(this.getPermissaoUrl(id));
  }

  addPermissao(permissao) {
    return this.http.post(this.url, JSON.stringify(permissao))
      .subscribe({
        error(err) { alert("Houve um erro ao cadastrar uma nova permissão " + err) },
        complete() { alert("Nova permissão foi cadastrada com sucesso") }
      });
  }

  updatePermissao(permissao) {
    return this.http.put(this.getPermissaoUrl(permissao.id), JSON.stringify(permissao));
  }

  deletePermissao(id) {
    return this.http.delete(this.getPermissaoUrl(id))
      .subscribe({
        error(err) { alert("Houve um erro ao tentar deletar a permissão") },
        complete() { alert("A permissão foi deletada com sucesso") }
      });
  }

  private getPermissaoUrl(id) {
    return this.url + "/" + id;
  }
}

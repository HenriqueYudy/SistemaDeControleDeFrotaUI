import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UsuarioPermissao } from '../class/usuario-permissao';

@Injectable()
export class UsuarioPermissaoService {

  private url: string = "http://177.85.0.23:2222/usuario_permissoes";

  constructor(private http: HttpClient) { }


  getUsuarioPermissoes(): Observable<UsuarioPermissao[]> {
    return this.http.get<UsuarioPermissao[]>(this.url);
  }

  getUsuarioPermissao(id): Observable<UsuarioPermissao> {
    return this.http.get<UsuarioPermissao>(this.getUsuarioPermissaoUrl(id));
  }

  addUsuarioPermissao(usuarioPermissao) {
    return this.http.post(this.url, JSON.stringify(usuarioPermissao));
  }

  updateUsuarioPermissao(usuarioPermissao) {
    return this.http.put(this.getUsuarioPermissaoUrl(usuarioPermissao.id), JSON.stringify(usuarioPermissao));
  }

  deleteUsuarioPermissao(id) {
    return this.http.delete(this.getUsuarioPermissaoUrl(id));
  }


  private getUsuarioPermissaoUrl(id) {
    return this.url + "/" + id;
  }
}

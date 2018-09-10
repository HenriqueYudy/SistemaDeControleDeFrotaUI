import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../class/usuario';

@Injectable()
export class UsuarioService {

  private url: string = "http://177.85.0.23:2222/security/users";
  private urlSignUp: string = "http://177.85.0.23:2222/security/users/signup";
  private urltest: string = "http://localhost:2222/security/users/perfil";

  constructor(private http: HttpClient,
              private https: Http
            ) { }


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }


  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(this.getUsuarioUrl(id));
  }

  getUsuarioByUsername(username): Observable<Usuario>{
    console.log(this.urltest+"/"+username);
    return this.http.get<Usuario>(this.urltest+"/"+username);
  }

  addUsuario(usuario) {
    return this.http.post(this.urlSignUp, JSON.stringify(usuario));
  }

  updateUsuario(usuario) {
    return this.http.post(this.getUsuarioUrl(usuario.id), JSON.stringify(usuario));
  }

  deleteUsuario(id) {
    return this.http.delete(this.getUsuarioUrl(id));
  }

  private getUsuarioUrl(id) {
    return this.url + "/" + id;
  }


}

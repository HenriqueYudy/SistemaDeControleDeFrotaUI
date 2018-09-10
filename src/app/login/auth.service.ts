import { TokenStorage } from './../shared/token/tokenStorage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Usuario } from '../layout/configuracao/usuario/shared/class/usuario';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

    private usuarioAutenticado: boolean = false;

    mostrarMenuEmitter = new EventEmitter<boolean>();
    private loginUrl: string = "http://177.85.0.23:2222/user/login";

    token: string;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    fazerLogin(username: string, password: string): Observable<any> {
        
        this.router.navigate(['/dashboard']);

        const credentials = {username: username, password: password};
        console.log("Autenticando ::");
        return this.http.post("http://177.85.0.23:2222/token/login", credentials).do(
            (success : any) => {
                if(window.sessionStorage.length > 0){
            
                    this.usuarioAutenticado = true;
        
                    this.mostrarMenuEmitter.emit(true);
            
                    this.router.navigate(['/dashboard']);
                }
            }
        );

       


        // if (usuario.email != undefined &&
        //     usuario.senha != undefined) {


        // } else {
        //     alert("Email ou a Senha estão incorretos")
        //     this.usuarioAutenticado = false;

        //     this.mostrarMenuEmitter.emit(false);
        // }

    }

    logout() {

    }
    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }

    deslogarDoSistema() {
        this.usuarioAutenticado = false;
        return this.usuarioAutenticado;
    }

}

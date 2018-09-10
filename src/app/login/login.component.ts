import { ToasterService } from './../toaster-service';
import { Router } from '@angular/router';
import { Usuario } from './../layout/configuracao/usuario/shared/class/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { Component, OnInit, EventEmitter, ErrorHandler } from '@angular/core';
import { routerTransition } from '../router.animation';
import { UserLogin } from './login';
import { TokenStorage } from '../shared/token/tokenStorage';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  formLogin: FormGroup;
  userLogin: UserLogin = new UserLogin();
  

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private token: TokenStorage,
    private toasterService: ToasterService
  ) {
    this.formLogin = formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  login():void {
    this.authService.fazerLogin(this.userLogin.username, this.userLogin.password).subscribe(
      data =>{
        
        this.token.saveToken(data.token);
        this.token.saveUser(this.userLogin.username);
        this.router.navigate(['/dashboard']);
      },
      err=> {
        this.mostrar();
      }
      
    );
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
}

  logout() {

  }

  mostrar(){
    this.toasterService.Error("Usuario ou senha estão incorretos.");
  }

}

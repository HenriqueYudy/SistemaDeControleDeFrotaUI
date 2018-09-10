import { Observable } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Usuario } from '../../layout/configuracao/usuario/shared/class/usuario';
import { AuthService } from '../../login/auth.service';


const TOKEN_KEY = 'AuthToken';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {

    if (window.sessionStorage.getItem(TOKEN_KEY) != null) {
      return true;
    } else {

      this.router.navigate(['/login']);

      return false;
    }

  }

}

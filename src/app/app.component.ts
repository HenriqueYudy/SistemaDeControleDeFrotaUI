import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarMenu: boolean = false;
  logado: boolean = true;

  constructor(private authService: AuthService){

  }

  ngOnInit() {



    
  }
}

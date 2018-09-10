import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  animations: [routerTransition()]
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}

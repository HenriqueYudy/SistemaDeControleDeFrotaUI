import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';

@Component({
  selector: 'app-coordenada',
  templateUrl: './coordenada.component.html',
  styleUrls: ['./coordenada.component.css'],
  animations: [routerTransition()]
})
export class CoordenadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

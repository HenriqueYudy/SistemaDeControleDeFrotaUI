import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-rastreador',
  templateUrl: './rastreador.component.html',
  styleUrls: ['./rastreador.component.css'],
  animations: [routerTransition()]
})
export class RastreadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

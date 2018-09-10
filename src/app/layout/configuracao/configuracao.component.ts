import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css'],
  animations: [routerTransition()]
})
export class ConfiguracaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

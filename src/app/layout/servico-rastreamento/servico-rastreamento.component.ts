import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-servico-rastreamento',
  templateUrl: './servico-rastreamento.component.html',
  styleUrls: ['./servico-rastreamento.component.css'],
  animations: [routerTransition()]
})
export class ServicoRastreamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

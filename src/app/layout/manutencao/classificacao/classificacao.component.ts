import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css'],
  animations: [routerTransition()]
})
export class ClassificacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

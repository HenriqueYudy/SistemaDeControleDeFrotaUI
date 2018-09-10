import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-produto-servico',
  templateUrl: './produto-servico.component.html',
  styleUrls: ['./produto-servico.component.css'],
  animations: [routerTransition()]
})
export class ProdutoServicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

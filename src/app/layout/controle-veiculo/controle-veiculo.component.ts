import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-controle-veiculo',
  templateUrl: './controle-veiculo.component.html',
  styleUrls: ['./controle-veiculo.component.css'],
  animations: [routerTransition()]
})
export class ControleVeiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

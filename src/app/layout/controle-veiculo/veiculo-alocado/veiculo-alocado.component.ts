import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-veiculo-alocado',
  templateUrl: './veiculo-alocado.component.html',
  styleUrls: ['./veiculo-alocado.component.css'],
  animations: [routerTransition()]
})
export class VeiculoAlocadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

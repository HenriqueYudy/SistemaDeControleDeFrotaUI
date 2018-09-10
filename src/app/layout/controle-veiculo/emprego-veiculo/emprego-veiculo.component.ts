import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-emprego-veiculo',
  templateUrl: './emprego-veiculo.component.html',
  styleUrls: ['./emprego-veiculo.component.css'],
  animations: [routerTransition()]
})
export class EmpregoVeiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

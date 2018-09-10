import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',  
  styleUrls: ['./veiculo.component.css'],
  animations: [routerTransition()]
})
export class VeiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

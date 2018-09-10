import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css'],
  animations: [routerTransition()]
})
export class ManutencaoComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

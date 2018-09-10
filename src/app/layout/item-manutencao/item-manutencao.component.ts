import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-item-manutencao',
  templateUrl: './item-manutencao.component.html',
  styleUrls: ['./item-manutencao.component.css'],
  animations: [routerTransition()]
})
export class ItemManutencaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

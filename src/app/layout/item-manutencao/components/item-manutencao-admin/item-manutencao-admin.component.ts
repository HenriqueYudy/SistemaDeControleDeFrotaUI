import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'item-manutencao-admin',
  templateUrl: './item-manutencao-admin.component.html',
  styleUrls: ['./item-manutencao-admin.component.css']
})
export class ItemManutencaoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

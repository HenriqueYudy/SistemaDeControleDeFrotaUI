import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'abastecimento-admin',
  templateUrl: './abastecimento-admin.component.html',
  styleUrls: ['./abastecimento-admin.component.css']
})
export class AbastecimentoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

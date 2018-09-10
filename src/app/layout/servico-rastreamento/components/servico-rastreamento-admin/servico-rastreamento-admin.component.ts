import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'servico-rastreamento-admin',
  templateUrl: './servico-rastreamento-admin.component.html',
  styleUrls: ['./servico-rastreamento-admin.component.css']
})
export class ServicoRastreamentoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0});
  }

}

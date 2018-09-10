import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'controle-veiculo-admin',
  templateUrl: './controle-veiculo-admin.component.html',
  styleUrls: ['./controle-veiculo-admin.component.css']
})
export class ControleVeiculoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

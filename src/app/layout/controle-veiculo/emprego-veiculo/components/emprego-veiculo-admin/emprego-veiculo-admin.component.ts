import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'emprego-veiculo-admin',
  templateUrl: './emprego-veiculo-admin.component.html',
  styleUrls: ['./emprego-veiculo-admin.component.css']
})
export class EmpregoVeiculoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

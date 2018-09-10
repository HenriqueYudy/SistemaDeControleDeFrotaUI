import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'fornecedor-admin',
  templateUrl: './fornecedor-admin.component.html',
  styleUrls: ['./fornecedor-admin.component.css']
})
export class FornecedorAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'produto-admin',
  templateUrl: './produto-servico-admin.component.html',
  styleUrls: ['./produto-servico-admin.component.css']
})
export class ProdutoServicoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

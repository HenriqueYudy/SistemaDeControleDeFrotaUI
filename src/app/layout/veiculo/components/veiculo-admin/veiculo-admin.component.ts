import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'veiculo-admin',
  templateUrl: './veiculo-admin.component.html',
  styleUrls: ['./veiculo-admin.component.css']
})
export class VeiculoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

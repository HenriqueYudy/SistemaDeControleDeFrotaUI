import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'empresa-admin',
  templateUrl: './empresa-admin.component.html',
  styleUrls: ['./empresa-admin.component.css']
})
export class EmpresaAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

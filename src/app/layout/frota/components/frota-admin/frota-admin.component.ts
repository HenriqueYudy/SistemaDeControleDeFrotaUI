import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'frota-admin',
  templateUrl: './frota-admin.component.html',
  styleUrls: ['./frota-admin.component.css']
})
export class FrotaAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'rastreador-admin',
  templateUrl: './rastreador-admin.component.html',
  styleUrls: ['./rastreador-admin.component.css']
})
export class RastreadorAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }

}

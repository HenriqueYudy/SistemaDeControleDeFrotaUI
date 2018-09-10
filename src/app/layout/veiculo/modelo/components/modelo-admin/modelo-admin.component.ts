import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'modelo-admin',
  templateUrl: './modelo-admin.component.html',
  styleUrls: ['./modelo-admin.component.css']
})
export class ModeloAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

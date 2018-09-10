import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'marca-admin',
  templateUrl: './marca-admin.component.html',
  styleUrls: ['./marca-admin.component.css']
})
export class MarcaAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

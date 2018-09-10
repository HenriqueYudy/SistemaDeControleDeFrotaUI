import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'condutor-admin',
  templateUrl: './condutor-admin.component.html',
  styleUrls: ['./condutor-admin.component.css']
})
export class CondutorAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

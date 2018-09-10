import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'manutencao-admin',
  templateUrl: './manutencao-admin.component.html',
  styleUrls: ['./manutencao-admin.component.css']
})
export class ManutencaoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

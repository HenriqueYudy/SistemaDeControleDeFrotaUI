import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'classificacao-admin',
  templateUrl: './classificacao-admin.component.html',
  styleUrls: ['./classificacao-admin.component.css']
})
export class ClassificacaoAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

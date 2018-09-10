import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css'],
  animations: [routerTransition()]
})
export class PermissaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

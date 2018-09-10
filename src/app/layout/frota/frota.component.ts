import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-frota',
  templateUrl: './frota.component.html',
  styleUrls: ['./frota.component.css'],
  animations: [routerTransition()]
})
export class FrotaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

  }

}

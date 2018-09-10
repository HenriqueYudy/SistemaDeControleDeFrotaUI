import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css'],
  animations: [routerTransition()]
})
export class TecnicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

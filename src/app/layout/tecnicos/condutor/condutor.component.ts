import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'app-condutor',
  templateUrl: './condutor.component.html',
  styleUrls: ['./condutor.component.css'],
  animations: [routerTransition()]
})
export class CondutorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

}

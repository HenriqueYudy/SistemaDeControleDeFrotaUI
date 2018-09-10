import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animation';

@Component({
  selector: 'app-condutor-responsavel',
  templateUrl: './condutor-responsavel.component.html',
  styleUrls: ['./condutor-responsavel.component.css'],
  animations: [routerTransition()]
})
export class CondutorResponsavelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

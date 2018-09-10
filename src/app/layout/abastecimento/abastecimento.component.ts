import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.component.html',
  styleUrls: ['./abastecimento.component.css'],
  animations: [routerTransition()]
})
export class AbastecimentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

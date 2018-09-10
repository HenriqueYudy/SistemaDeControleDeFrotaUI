import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  animations: [routerTransition()]
})
export class FornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

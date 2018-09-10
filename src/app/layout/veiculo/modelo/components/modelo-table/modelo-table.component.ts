import { Modelo } from './../../shared/class/modelo';
import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../../shared/service/modelo.service';

@Component({
  selector: 'modelo-table',
  templateUrl: './modelo-table.component.html',
  styleUrls: ['./modelo-table.component.css']
})
export class ModeloTableComponent implements OnInit {

  modelos: Modelo[];

  constructor(private modeloService: ModeloService) { }

  ngOnInit() {
    this.modeloService.getModelos()
      .subscribe(modelos => this.modelos = modelos);
  }

}

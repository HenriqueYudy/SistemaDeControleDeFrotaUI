import { RastreadorService } from './../../shared/service/rastreador.service';
import { Rastreador } from './../../shared/class/rastreador';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rastreador-table',
  templateUrl: './rastreador-table.component.html',
  styleUrls: ['./rastreador-table.component.css']
})
export class RastreadorTableComponent implements OnInit {

  rastreadores: Rastreador[];

  constructor(private rastreadorService: RastreadorService) { }

  ngOnInit() {
    this.rastreadorService.getRastreadores()
    .subscribe(rastreadores => this.rastreadores = rastreadores);
  }

}

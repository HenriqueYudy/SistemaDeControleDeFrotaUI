import { Component, OnInit } from '@angular/core';
import { Coordenada } from '../../shared/class/coordenada';
import { CoordenadaService } from '../../shared/service/coordenada.service';

@Component({
  selector: 'coordenada-table',
  templateUrl: './coordenada-table.component.html',
  styleUrls: ['./coordenada-table.component.css']
})
export class CoordenadaTableComponent implements OnInit {


  coordenadas: Coordenada[];

  constructor(private coordenadaService: CoordenadaService) { }

  ngOnInit() {

    this.coordenadaService.getCoordenadas()
    .subscribe(coordenadas => this.coordenadas = coordenadas);

  }

}

import { Component, OnInit } from '@angular/core';


import { VeiculoAlocadoService } from './../../shared/service/veiculo-alocado.service';
import { VeiculoAlocado } from './../../shared/class/veiculo-alocado';

@Component({
  selector: 'veiculo-alocado-table',
  templateUrl: './veiculo-alocado-table.component.html',
  styleUrls: ['./veiculo-alocado-table.component.css']
})
export class VeiculoAlocadoTableComponent implements OnInit {

  veiculoAlocados: VeiculoAlocado[];

  constructor(private veiculoAlocadoService: VeiculoAlocadoService) { }

  ngOnInit() {

    this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);

  }

}

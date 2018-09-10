import { VeiculoAlocadoService } from './../../../../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoAlocado } from '../../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';

@Component({
  selector: 'condutor-responsavel-table',
  templateUrl: './condutor-responsavel-table.component.html',
  styleUrls: ['./condutor-responsavel-table.component.css']
})
export class CondutorResponsavelTableComponent implements OnInit {


  veiculoAlocados: VeiculoAlocado[];

  constructor(private veiculoAlocadoService: VeiculoAlocadoService) { }

  ngOnInit() {

    this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);
  }

}

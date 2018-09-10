import { VeiculoRastreadoService } from './../../shared/service/veiculo-rastreado.service';
import { VeiculoRastreado } from './../../shared/class/veiculo-rastreado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servico-rastreamento-table',
  templateUrl: './servico-rastreamento-table.component.html',
  styleUrls: ['./servico-rastreamento-table.component.css']
})
export class ServicoRastreamentoTableComponent implements OnInit {

  veiculoRastreados: VeiculoRastreado[];

  constructor(private veiculoRastreadoService: VeiculoRastreadoService) { }

  ngOnInit() {

    this.veiculoRastreadoService.getVeiculoRastreados()
      .subscribe(veiculoRastreados => this.veiculoRastreados = veiculoRastreados);
  }

}

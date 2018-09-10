import { VeiculoService } from './../../shared/service/veiculo.service';
import { Veiculo } from './../../shared/class/veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'veiculo-table',
  templateUrl: './veiculo-table.component.html',
  styleUrls: ['./veiculo-table.component.css']
})
export class VeiculoTableComponent implements OnInit {

  veiculos: Veiculo[];

  

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {

    this.veiculoService.getVeiculos()
    .subscribe( veiculos => this.veiculos = veiculos);
  }

}

import { DataTable } from 'primeng/datatable';
import { EmpregoVeiculoService } from './../../shared/service/emprego-veiculo.service';
import { EmpregoVeiculo } from './../../shared/class/emprego-veiculo';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'emprego-veiculo-table',
  templateUrl: './emprego-veiculo-table.component.html',
  styleUrls: ['./emprego-veiculo-table.component.css']
})
export class EmpregoVeiculoTableComponent implements OnInit {

  empregoVeiculos: EmpregoVeiculo[];

  constructor(private empregoVeiculoService: EmpregoVeiculoService) { }

  ngOnInit() {
    this.empregoVeiculoService.getEmpregoVeiculos()
      .subscribe(empregoVeiculos => this.empregoVeiculos = empregoVeiculos);

     
    
    
  }

}

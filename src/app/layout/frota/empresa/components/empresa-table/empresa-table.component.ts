import { EmpresaService } from './../../shared/service/empresa.service';
import { Empresa } from './../../shared/class/empresa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empresa-table',
  templateUrl: './empresa-table.component.html',
  styleUrls: ['./empresa-table.component.css']
})
export class EmpresaTableComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas()
      .subscribe(empresas => this.empresas = empresas);
  }

}

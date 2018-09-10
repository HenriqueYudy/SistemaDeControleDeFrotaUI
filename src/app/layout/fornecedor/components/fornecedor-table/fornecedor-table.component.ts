import { Fornecedor } from './../../shared/class/fornecedor';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../shared/service/fornecedor.service';

@Component({
  selector: 'fornecedor-table',
  templateUrl: './fornecedor-table.component.html',
  styleUrls: ['./fornecedor-table.component.css']
})
export class FornecedorTableComponent implements OnInit {

  fornecedores: Fornecedor[];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

}

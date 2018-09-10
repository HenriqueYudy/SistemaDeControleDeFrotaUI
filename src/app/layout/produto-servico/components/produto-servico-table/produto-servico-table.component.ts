import { ProdutoServicoService } from './../../shared/services/produto-servico.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../../shared/class/produto-servico';

@Component({
  selector: 'produto-servico-table',
  templateUrl: './produto-servico-table.component.html',
  styleUrls: ['./produto-servico-table.component.css']
})
export class ProdutoServicoTableComponent implements OnInit {

  produtoServicos: ProdutoServico[];

  constructor(
    private produtoServicoService: ProdutoServicoService
  ) { }


  ngOnInit() {
    this.produtoServicoService.getProdutoServicos()
    .subscribe(produtoServicos => this.produtoServicos = produtoServicos);

  }

}

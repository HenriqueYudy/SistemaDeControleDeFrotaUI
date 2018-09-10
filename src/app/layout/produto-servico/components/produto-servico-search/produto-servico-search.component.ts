import { Router } from '@angular/router';
import { ProdutoServicoService } from './../../shared/services/produto-servico.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'produto-servico-search',
  templateUrl: './produto-servico-search.component.html',
  styleUrls: ['./produto-servico-search.component.css']
})
export class ProdutoServicoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private produtoServicoService: ProdutoServicoService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  editar() {
    if (this.seletorEditar == false) {
      this.seletorEditar = true;
    } else {
      this.seletorEditar = false;
    }
  }

  editarItem() {
    var id = $("#campoEditar").val();
    var item = this.produtoServicoService.getProdutoServico(id);
    this.router.navigate(['produtoServicos/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar este produto ou serviço?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.produtoServicoService.deleteProdutoServico(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão do produto foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o produto ou seu usuario não tem permissão !!");
        }
      );
    }
  }

}

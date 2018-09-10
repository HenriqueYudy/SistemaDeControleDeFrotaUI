import { ToasterService } from './../../../../toaster-service';
import { VeiculoRastreadoService } from './../../shared/service/veiculo-rastreado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'servico-rastreamento-search',
  templateUrl: './servico-rastreamento-search.component.html',
  styleUrls: ['./servico-rastreamento-search.component.css']
})
export class ServicoRastreamentoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private veiculoRastreadoService: VeiculoRastreadoService,
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
    var item = this.veiculoRastreadoService.getVeiculoRastreado(id);

    this.router.navigate(['servicoRastreamento/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar este vinculo do rastreador?")
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.veiculoRastreadoService.deleteVeiculoRastreado(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão do veiculo rastreado realizado com sucesso  !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o veiculo rastreado !!");
        }
      )
    }
    return;
  }

}

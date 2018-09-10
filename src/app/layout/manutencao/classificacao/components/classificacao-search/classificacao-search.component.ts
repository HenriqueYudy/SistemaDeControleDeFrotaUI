import { Router } from '@angular/router';
import { ClassificacaoService } from './../../shared/service/classificacao.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../../toaster-service';


@Component({
  selector: 'classificacao-search',
  templateUrl: './classificacao-search.component.html',
  styleUrls: ['./classificacao-search.component.css']
})
export class ClassificacaoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private classifcacaoService: ClassificacaoService,
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
    var item = this.classifcacaoService.getClassificacao(id);

    this.router.navigate(['manutencao/classificacao/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta classificação?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.classifcacaoService.deleteClassificacao(id)
        .subscribe(
          suc => {
            this.toasterService.Warning("Exclusão da classificação foi efetuado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar deletar a classificação ou seu usuario não tem permissão !!");
          });
    }
  }
}

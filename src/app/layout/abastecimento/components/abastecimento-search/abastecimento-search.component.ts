import { Router } from '@angular/router';
import { AbastecimentoService } from './../../shared/service/abastecimento.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'abastecimento-search',
  templateUrl: './abastecimento-search.component.html',
  styleUrls: ['./abastecimento-search.component.css']
})
export class AbastecimentoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private abastecimentoService: AbastecimentoService,
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
    var item = this.abastecimentoService.getAbastecimento(id);

    this.router.navigate(['abastecimentos/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {

    var resp = confirm("Deseja realmente deletar este abastecimento?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.abastecimentoService.deleteAbastecimento(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão do abastecimento foi efetuado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o abastecimento ou seu usuario não tem permissão !!");
        }
      );
    } else {
      return;
    }
  }

}

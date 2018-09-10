import { Router } from '@angular/router';
import { RastreadorService } from './../../shared/service/rastreador.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'rastreador-search',
  templateUrl: './rastreador-search.component.html',
  styleUrls: ['./rastreador-search.component.css']
})
export class RastreadorSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private rastreadorService: RastreadorService,
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
    var item = this.rastreadorService.getRastreador(id);
    this.router.navigate(['rastreadores/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar este rastreador?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.rastreadorService.deleteRastreador(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão do rastreador foi efetuada com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o rastreador ou seu usuario não tem permissão !!");
        }
      )
    }

  }

}

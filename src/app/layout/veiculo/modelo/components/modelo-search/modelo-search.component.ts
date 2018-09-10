import { ToasterService } from './../../../../../toaster-service';
import { ModeloService } from './../../shared/service/modelo.service';
import { MarcaService } from './../../../marca/shared/service/marca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'modelo-search',
  templateUrl: './modelo-search.component.html',
  styleUrls: ['./modelo-search.component.css']
})
export class ModeloSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;



  constructor(
    private modeloService: ModeloService,
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

  editarModelo() {
    var id = $("#campoEditar").val();
    var item = this.modeloService.getModelo(id);
    this.router.navigate(['veiculos/modelo/edit/'+id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar este modelo?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.modeloService.deleteModelo(id)
      .subscribe(
        suc => {
          this.toasterService.Success("A exclusão do modelo foi realizada com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o modelo ou o seu usuario não tem permissão !! ");
        }
      )
    } else {
      return;
    }
  }

}

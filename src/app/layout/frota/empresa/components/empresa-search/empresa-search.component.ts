import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from './../../shared/service/empresa.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'empresa-search',
  templateUrl: './empresa-search.component.html',
  styleUrls: ['./empresa-search.component.css']
})
export class EmpresaSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private empresaService: EmpresaService,
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
    var item = this.empresaService.getEmpresa(id);

    this.router.navigate(['frotas/empresa/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta empresa?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.empresaService.deleteEmpresa(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("A exclusão da empresa foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar a empresa ou o seu usuario não tem permissão !!");
        }
      )
    }
  }
}

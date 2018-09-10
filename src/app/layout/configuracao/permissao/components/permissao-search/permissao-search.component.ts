import { ToasterService } from './../../../../../toaster-service';
import { Router } from '@angular/router';
import { PermissaoService } from './../../shared/service/permissao.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'permissao-search',
  templateUrl: './permissao-search.component.html',
  styleUrls: ['./permissao-search.component.css']
})
export class PermissaoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private permissaoService: PermissaoService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  visualizar(){
    this.toasterService.Info("Ação em desenvolvimento")
  }

  editar() {
    this.toasterService.Info("Ação em desenvolvimento");
    // if (this.seletorEditar == false) {
    //   this.seletorEditar = true;
    // } else {
    //   this.seletorEditar = false;
    // }
  }

  editarItem() {
    var id = $("#campoEditar").val();
    var item = this.permissaoService.getPermissao(id);
    this.router.navigate(['configuracao/permissoes/edit/'+id]);
  }

  deletar() {
    this.toasterService.Info("Ação em desenvolvimento")
    // if (this.seletorDelete == false) {
    //   this.seletorDelete = true;
    // } else {
    //   this.seletorDelete = false;
    // }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta permissão?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.permissaoService.deletePermissao(id);
    } else {
      return;
    }
  }



}

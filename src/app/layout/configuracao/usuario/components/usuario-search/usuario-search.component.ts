import { ToasterService } from './../../../../../toaster-service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/service/usuario.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.css']
})
export class UsuarioSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
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
    var item = this.usuarioService.getUsuario(id)
    .subscribe(
      dados => console.log(dados)
    );
    this.router.navigate(['/configuracao/usuario/edit/'+id]);
  }
  
  visualizar(){
    this.toasterService.Info("Ação em desenvolvimento");
  }

  deletar() {
    this.toasterService.Warning("Ação indisponivel");
    // if (this.seletorDelete == false) {
    //   this.seletorDelete = true;
    // } else {
    //   this.seletorDelete = false;
    // }
  }

  deletarItem() {
    var id = $("#campoDeletar").val();
    this.usuarioService.deleteUsuario(id)
    .subscribe(
      suc =>{
        this.toasterService.Warning("A exclusão do usuario foi realizado com sucesso !!");
      },
      err =>{
        this.toasterService.Error("Ocorreu um erro ao tentar deletar o usuario !!");
      }
    );
  }
}

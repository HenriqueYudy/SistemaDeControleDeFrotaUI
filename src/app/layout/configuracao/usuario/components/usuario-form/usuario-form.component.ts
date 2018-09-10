import { state } from '@angular/animations';
import { UsuarioService } from './../../shared/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../shared/class/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../../../router.animation';
import { ToasterService } from '../../../../../toaster-service';
import * as $ from 'jquery';

@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  animations: [routerTransition()]
})
export class UsuarioFormComponent implements OnInit {

  formUsuario: FormGroup;
  title: string;
  usuario: Usuario = new Usuario();
  url: string =  "http:177.85.0.23/onnet_frota/configuracao/usuario/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/configuracao/usuario/edit/";
  mostrarBread: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private toasterService: ToasterService
  ) {
    this.formUsuario = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      ativo: [true]
    });
  }

  ngOnInit() {

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarBread = false;
    }

    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      console.log("ID: " + id);

      if (!id) {
        console.log("ta entrando nessa bosta");
        return;
      }

      if (urls == this.urlEdit + id) {

        this.usuarioService.getUsuario(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            });
      }

      if (urls == this.urlEdit + id) {
        this.mostrarBread = true;
      }
    });

  }

  popularDadosForm(dados) {
    this.formUsuario.patchValue({
      id: dados.id,
      nome: dados.nome,
      username: dados.username,
      email: dados.email,
      senha: dados.senha,
    })
  }

  save() {

    if ($("#senha").val() === $("#senhaConfirm").val()) {

      var result,
        usuarioValue = this.formUsuario.value;

      if (usuarioValue.id) {
        result = this.usuarioService.updateUsuario(usuarioValue)
          .subscribe(
            suc => {
              this.toasterService.Success("Usuario editado com sucesso !!");
            },
            err => {
              this.toasterService.Error("Ocorreu algum erro ao tentar editar usuario !!");
            }
          );
      } else {
        result = this.usuarioService.addUsuario(usuarioValue)
          .subscribe(
            suc => {
              this.toasterService.Success("Cadastro efetuado com sucesso !!");
            },
            err => {
              this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo usuario !!");
            }
          );
      }
      var forms = document.getElementsByTagName("form");

      for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
      }

      var urls = window.location.protocol + window.location.host + window.location.pathname;
      if (urls != this.url) {
        this.router.navigate(['/configuracao/usuario']);
      }
      return;
    } else {
      this.toasterService.Error("As senhas não são iguais. Verifique se digitou as senhas corretamente.");
    }
  }

  verificaValidTouched(campo) {
    return !this.formUsuario.get(campo).valid && this.formUsuario.get(campo).touched;
  }
}

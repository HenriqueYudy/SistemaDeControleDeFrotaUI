import { ToasterService } from './../../../../toaster-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../configuracao/usuario/shared/class/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../configuracao/usuario/shared/service/usuario.service';
import { TokenStorage } from '../../../../shared/token/tokenStorage';

@Component({
  selector: 'perfil-body',
  templateUrl: './perfil-body.component.html',
  styleUrls: ['./perfil-body.component.css']
})
export class PerfilBodyComponent implements OnInit {

  usuario: Usuario = new Usuario();
  formUsuario: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ToasterService: ToasterService,
    private usuarioService: UsuarioService,
    private token: TokenStorage
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


    this.usuarioService.getUsuarioByUsername(sessionStorage.getItem("UserName"))
      .subscribe(
        dados => this.popularDadosForm(dados),
        response => {
          if (response.status == 404) {
            this.router.navigate(['/dashboard']);
          }
        });

       
  }

  popularDadosForm(dados) {
    this.formUsuario.patchValue({
      id: dados.id,
      nome: dados.nome,
      username: dados.username,
      email: dados.email,
      senha: dados.senha
    });
  }

  save() {
    var result,
      usuarioValue = this.formUsuario.value;

    if (usuarioValue.id) {
      result = this.usuarioService.updateUsuario(usuarioValue)
        .subscribe(
          suc => {
            this.ToasterService.Success("Perfil editado com sucesso !!");
          },
          err => {
            this.ToasterService.Error("Ocorreu algum erro ao tentar editar o perfil !!");
          }
        );
    } else {
      return;
    }

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    
    var username = sessionStorage.getItem("UserName");

    setTimeout(() => {
      this.usuarioService.getUsuarioByUsername(username)
        .subscribe(
          dados => this.popularDadosForm(dados),
          response => {
            if (response.status == 404) {
              this.router.navigate(['/dashboard']);
            }
          });
    }, 1000);

    // processo de salvar concluido e prox etapa é bloquear os campos novamente

  }

  verificaValidTouched(campo){
    return !this.formUsuario.get(campo).valid && this.formUsuario.get(campo).touched;
  }


}

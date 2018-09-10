import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../layout/configuracao/usuario/shared/class/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../layout/configuracao/usuario/shared/service/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {


  formUsuario: FormGroup;
  title: string;
  usuario: Usuario = new Usuario();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.formUsuario = formBuilder.group({
      id: [''],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      ativo: ['true'],
      nome: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }



  save() {
    var result,
      usuarioValue = this.formUsuario.value;


    result = this.usuarioService.addUsuario(usuarioValue);


    this.router.navigate(["login"]);
    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

  }

}

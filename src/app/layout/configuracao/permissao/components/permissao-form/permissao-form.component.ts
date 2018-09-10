import { PermissaoService } from './../../shared/service/permissao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Permissao } from './../../shared/class/permissao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../../router.animation';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'permissao-form',
  templateUrl: './permissao-form.component.html',
  styleUrls: ['./permissao-form.component.css'],
  animations: [routerTransition()]
})
export class PermissaoFormComponent implements OnInit {

  formPermissao: FormGroup;
  title: string;
  permissao: Permissao = new Permissao();

  url: string = "http:localhost:4200/configuracao/permissoes/form";
  urlEdit: string = "http:localhost:4200/configuracao/permissoes/edit/";
  mostrarPegada: boolean = true;


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private permissaoService: PermissaoService,
    private toasterService: ToasterService
  ) {
    this.formPermissao = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  ngOnInit() {
this.toasterService.Warning("Ação indisponivel");
    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarPegada = false;
    }

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (urls == this.urlEdit + id) {

        this.permissaoService.getPermissao(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            }
          )
      }
      if (urls == this.urlEdit + id) {
        this.mostrarPegada = true;
      }
    });

  }

  popularDadosForm(dados) {
    this.formPermissao.patchValue({
      id: dados.id,
      nome: dados.nome,
      descricao: dados.descricao
    });
  }

  save() {
    var result,
      permissaoValue = this.formPermissao.value;

    if (permissaoValue.id) {
      result = this.permissaoService.updatePermissao(permissaoValue)
        .subscribe({
          error(err) { alert("Houve um erro ao tentar atualizar esta permissão") },
          complete() { alert("Os dados da permissão foram atualizadas com sucesso") }
        });
      setTimeout(() => {
        this.router.navigate(['configuracao/permissoes']);
      }, 500);
    } else {
      result = this.permissaoService.addPermissao(permissaoValue);
    }


    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {
      setTimeout(() => {
        this.router.navigate(['configuracao/permissoes']);
      }, 500);
    }
    return;
  }

  verificaValidTouched(campo) {
    return !this.formPermissao.get(campo).valid && this.formPermissao.get(campo).touched;
  }
}

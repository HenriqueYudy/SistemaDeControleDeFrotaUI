import { VeiculoService } from './../../../../veiculo/shared/service/veiculo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Empresa } from './../../shared/class/empresa';
import { EmpresaService } from './../../shared/service/empresa.service';
import { routerTransition } from '../../../../../router.animation';
import { ToasterService } from '../../../../../toaster-service';
import * as $ from 'jquery';

@Component({
  selector: 'empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css'],
  animations: [routerTransition()]
})
export class EmpresaFormComponent implements OnInit {

  formEmpresa: FormGroup;
  title: string;
  empresa: Empresa = new Empresa();

  mostrarPegada: boolean = true;
  url: string = "http:177.85.0.23/onnet_frota/frotas/empresa/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/frotas/empresa/edit/";

  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/,'.',/\d/,/\d/,/\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private toasterService: ToasterService
  ) {
    this.formEmpresa = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      nome_fantasia: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarPegada = false;
    }


    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        return;
      }

      if (urls == this.urlEdit + id) {
        this.empresaService.getEmpresa(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            }
          )
      }
      if(urls == this.urlEdit+id){
        this.mostrarPegada = true;
      }
    });

  }

  popularDadosForm(dados) {
    this.formEmpresa.patchValue({
      id: dados.id,
      nome: dados.nome,
      cnpj: dados.cnpj,
      responsavel: dados.responsavel,
      nome_fantasia: dados.nome_fantasia
    })
  }

  save() {
    var result,
      empresaValue = this.formEmpresa.value;

    if (empresaValue.id) {
      result = this.empresaService.updateEmpresa(empresaValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informações da empresa foram atualizadas com sucesso !!");
          },
          err =>{
            this.toasterService.Error("Ocorreu um erro ao tentar atualizar os dados da empresa !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['frotas/empresa']);
      }, 500);
    } else {
      result = this.empresaService.addEmpresa(empresaValue)
      .subscribe(
        suc =>{
          this.toasterService.Success("Cadastro foi realizado com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar uma nova empresa !!");
        }
      )
    }

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {

      setTimeout(() => {
        this.router.navigate(['frotas/empresa']);

      }, 500);
    }
    return;
  }

  verificaValidTouched(campo) {
    return !this.formEmpresa.get(campo).valid && this.formEmpresa.get(campo).touched;
  }
}

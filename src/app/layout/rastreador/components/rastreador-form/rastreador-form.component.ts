import { ToasterService } from './../../../../toaster-service';
import { element } from 'protractor';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Router, ActivatedRoute } from '@angular/router';
import { Rastreador } from './../../shared/class/rastreador';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RastreadorService } from '../../shared/service/rastreador.service';
import { Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'rastreador-form',
  templateUrl: './rastreador-form.component.html',
  styleUrls: ['./rastreador-form.component.css'],
  animations: [routerTransition()]
})
export class RastreadorFormComponent implements OnInit {

  formRastreador: FormGroup;
  title: string;
  rastreador: Rastreador = new Rastreador();
  public telefoneMask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public imeiMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];

  url: string = "http:177.85.0.23/onnet_frota/rastreadores/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/rastreadores/edit/"
  mostrarPegada: Boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rastreadorService: RastreadorService,
    private toasterService: ToasterService
  ) {
    this.formRastreador = formBuilder.group({
      id: [''],
      numero_chip: ['', [Validators.required]],
      imei: ['', [Validators.required]]
    });
  }

  ngOnInit() {

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
        this.rastreadorService.getRastreador(id)
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
    this.formRastreador.patchValue({
      id: dados.id,
      numero_chip: dados.numero_chip,
      imei: dados.imei
    });
  }

  save() {

    var result,

      rastreadorValue = this.formRastreador.value;


    if (rastreadorValue.id) {
      result = this.rastreadorService.updateRastreador(rastreadorValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do rastreador foi alterada com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do rastreador !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['rastreadores']);
      }, 500);
    } else {
      result = this.rastreadorService.addRastreador(rastreadorValue)
        .subscribe(
          suc =>{
            this.toasterService.Success("Cadastro efetuado com sucesso !!");
          },
          err =>{
            this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo rastreador !!");
          }
        )
    }

    console.log(rastreadorValue);

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {
      setTimeout(() => {
        this.router.navigate(['rastreadores']);
      }, 500);
    }
    return;
  }

  verificaValidTouched(campo) {
    return !this.formRastreador.get(campo).valid && this.formRastreador.get(campo).touched;
  }
}

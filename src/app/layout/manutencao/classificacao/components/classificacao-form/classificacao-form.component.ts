import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { Classificacao } from './../../shared/class/classificacao';
import { ClassificacaoService } from '../../shared/service/classificacao.service';
import { routerTransition } from '../../../../../router.animation';
import { ToasterService } from '../../../../../toaster-service';
import * as $ from 'jquery';

@Component({
  selector: 'classificacao-form',
  templateUrl: './classificacao-form.component.html',
  styleUrls: ['./classificacao-form.component.css'],
  animations: [routerTransition()]
})
export class ClassificacaoFormComponent implements OnInit {

  formClassificacao: FormGroup;
  title: string;
  classificacao: Classificacao = new Classificacao();

  url: string = "http:177.85.0.23/onnet_frota/manutencao/classificacao/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/manutencao/classificacao/edit/";
  mostrarBread: boolean = true;


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private classificacaoService: ClassificacaoService,
    private toasterService: ToasterService
  ) {
    this.formClassificacao = formBuilder.group({
      id: [''],
      descricao: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarBread = false;
    }

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        return;
      }

      if (urls == this.urlEdit + id) {

        this.classificacaoService.getClassificacao(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            }
          )
      }
    });
  }

  popularDadosForm(dados) {
    this.formClassificacao.patchValue({
      id: dados.id,
      descricao: dados.descricao

    });
  }

  save() {
    var result,
      classificacaoValue = this.formClassificacao.value;

    if (classificacaoValue.id) {
      result = this.classificacaoService.updateClassificacao(classificacaoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informações da classificação foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados da classificacão !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['manutencao/classificacao']);
      }, 500);
    } else {
      result = this.classificacaoService.addClassificacao(classificacaoValue)
      .subscribe(
        suc =>{
          this.toasterService.Success("Cadastro efetuado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao cadastrar uma nova classificação !!");
        }
      );
    }


    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {

      setTimeout(() => {

        this.router.navigate(['manutencao/classificacao']);

      }, 500);
    }
  }

  verificaValidTouched(campo) {
    return !this.formClassificacao.get(campo).valid && this.formClassificacao.get(campo).touched;
  }

}

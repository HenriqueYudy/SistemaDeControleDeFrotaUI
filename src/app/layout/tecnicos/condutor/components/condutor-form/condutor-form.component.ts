import { ToasterService } from './../../../../../toaster-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Condutor } from './../../shared/class/condutor';
import { CondutorService } from '../../shared/service/condutor.service';
import { routerTransition } from '../../../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'condutor-form',
  templateUrl: './condutor-form.component.html',
  styleUrls: ['./condutor-form.component.css'],
  animations: [routerTransition()]
})
export class CondutorFormComponent implements OnInit {

  formCondutor: FormGroup;
  title: string;
  condutor: Condutor = new Condutor();
  url: string = "http:177.85.0.23/onnet_frota/tecnicos/condutor/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/tecnicos/condutor/edit/";
  mostrarBread: Boolean = true;


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private condutorService: CondutorService,
    private toasterService: ToasterService
  ) {
    this.formCondutor = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      numero_cnh: ['', [Validators.required]],
      vencimento_cnh: ['', [Validators.required]],
      categoria: ['', [Validators.required]]
    })
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
        this.condutorService.getCondutor(id)
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
        this.mostrarBread = true;
      }
    });
  }

  popularDadosForm(dados) {
    this.formCondutor.patchValue({
      id: dados.id,
      nome: dados.nome,
      numero_cnh: dados.numero_cnh,
      vencimento_cnh: dados.vencimento_cnh,
      categoria: dados.categoria
    })
  }

  save() {
    var result,
      condutorValue = this.formCondutor.value;

    if (condutorValue.id) {
      result = this.condutorService.updateCondutor(condutorValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do condutor foram atualizadas com sucesso !!");
          },
          err =>{
            this.toasterService.Error("Ocorreu um erro ao tentar atualizar os dados do condutor !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['tecnicos/condutor']);
      }, 500);
    } else {
      result = this.condutorService.addCondutor(condutorValue)
      .subscribe(
        suc => {
          this.toasterService.Success("O cadastro foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo condutor !!");
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
        this.router.navigate(['tecnicos/condutor']);
      }, 500);
    }
    return;

  }

  verificaValidTouched(campo) {
    return !this.formCondutor.get(campo).valid && this.formCondutor.get(campo).touched;
  }

}

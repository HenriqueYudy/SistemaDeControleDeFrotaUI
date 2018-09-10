import { ToasterService } from './../../../../toaster-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { Empresa } from './../../empresa/shared/class/empresa';
import { Frota } from '../../shared/class/frota';
import { FrotaService } from '../../shared/service/frota.service';
import { EmpresaService } from '../../empresa/shared/service/empresa.service';
import { routerTransition } from '../../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'frota-form',
  templateUrl: './frota-form.component.html',
  styleUrls: ['./frota-form.component.css'],
  animations: [routerTransition()]
})
export class FrotaFormComponent implements OnInit {

  formFrota: FormGroup;
  title: string;
  frota: Frota = new Frota();
  empresas: Empresa[];

  url: string = "http:177.85.0.23/onnet_frota/frotas/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/frotas/edit/";
  mostrarBread: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private frotaService: FrotaService,
    private empresaService: EmpresaService,
    private toasterService: ToasterService
  ) {
    this.formFrota = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      empresa: formBuilder.group({
        id: ['', [Validators.required]]
      })
    });
  }

  ngOnInit() {

    $('html, body').animate({scrollTop:0}, 'slow');


    this.empresaService.getEmpresas()
      .subscribe(empresas => this.empresas = empresas);


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
        this.frotaService.getFrota(id)
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
    this.formFrota.patchValue({
      id: dados.id,
      nome: dados.nome,
      empresa: dados.empresa
    });
  }

  save() {
    var result,
      frotaValue = this.formFrota.value;

    if (frotaValue.id) {
      result = this.frotaService.updateFrota(frotaValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informações da frota foram atualizadas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar atualizar os dados de frota !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['frotas']);
      }, 500);

    } else {
      result = this.frotaService.addFrota(frotaValue)
      .subscribe(
        suc =>{
          this.toasterService.Success("Cadastro foi realizado com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar uma nova frota !!");
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

        this.router.navigate(['frotas']);

      }, 500);
    }
    return;
  }





  verificaValidTouched(campo) {
    return !this.formFrota.get(campo).valid && this.formFrota.get(campo).touched;
  }
}

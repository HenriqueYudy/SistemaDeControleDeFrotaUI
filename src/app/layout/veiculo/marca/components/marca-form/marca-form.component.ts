import { ToasterService } from './../../../../../toaster-service';
import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MarcaService } from './../../shared/service/marca.service';
import { Marca } from './../../shared/class/marca';
import { routerTransition } from '../../../../../router.animation';
import * as $ from 'jquery';
import { timeout } from 'rxjs/operator/timeout';
import { on } from 'cluster';



@Component({
  selector: 'marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css'],
  animations: [routerTransition()]
})
export class MarcaFormComponent implements OnInit {

  formMarca: FormGroup;
  title: string;
  marca: Marca = new Marca();
  marcas: Marca;

  mostrarPegada: boolean = true;

  url: string = "http:177.85.0.23/onnet_frota/veiculos/marca/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/veiculos/marca/edit/";

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private toastrService: ToasterService
  ) {
    this.formMarca = formBuilder.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

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
        this.marcaService.getMarca(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            });
      }

      if (urls == this.urlEdit + id) {
        this.mostrarPegada = true;
      }
    });

  }

  popularDadosForm(dados) {
    this.formMarca.patchValue({
      id: dados.id,
      nome: dados.nome
    });
  }

  save() {

    var result,
      marcaValue = this.formMarca.value;

    if (marcaValue.id) {
      result = this.marcaService.updateMarca(marcaValue)
        .subscribe(
          suc => {
            this.toastrService.Success("Marca editada com sucesso");
          },
          err => {
            this.toastrService.Error("Ocorreu algum erro ao tentar editar os dados. Verifique se preencheu todos os campos corretamente");
          }
        )
      setTimeout(() => {
        this.router.navigate(['veiculos/marca']);

      }, 700);
    } else {
      result = this.marcaService.addMarca(marcaValue)
        .subscribe(
          suc => {
            this.SuccessCadastro();
          },
          err => {
            this.ErrorCadastro();
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
        this.router.navigate(['veiculos/marca']);

      }, 700);
    }
    return;
  }


  verificaValidTouched(campo) {
    return !this.formMarca.get(campo).valid && this.formMarca.get(campo).touched;
  }


  SuccessCadastro() {
    this.toastrService.Success("Cadastro efetuado com sucesso");
  }

  ErrorCadastro() {
    this.toastrService.Error("Ocorreu algum erro ao tentar cadastrar. Verifique se preencheu todos os campos corretamente");
  }

}

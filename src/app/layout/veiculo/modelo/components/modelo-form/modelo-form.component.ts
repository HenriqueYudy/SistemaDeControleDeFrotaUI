import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../../../../../router.animation';


import { Modelo } from './../../shared/class/modelo';
import { ModeloService } from '../../shared/service/modelo.service';
import { Marca } from './../../../marca/shared/class/marca';
import { MarcaService } from './../../../marca/shared/service/marca.service';
import { ToasterService } from '../../../../../toaster-service';
import * as $ from 'jquery';

@Component({
  selector: 'modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.css'],
  animations: [routerTransition()]
})
export class ModeloFormComponent implements OnInit {

  formModelo: FormGroup;
  title: string;
  modelo: Modelo = new Modelo();
  marcas: Marca[];
    
  url: string = "http:177.85.0.23/onnet_frota/veiculos/modelo/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/veiculos/modelo/edit/";

  mostrarPegada: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private modeloService: ModeloService,
    private marcaService: MarcaService,
    private toasterService: ToasterService
  ) {
    this.formModelo = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      marca: formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);


    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarPegada = false;
    }


    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (urls == this.urlEdit + id) {

        this.modeloService.getModelo(id)
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
    this.formModelo.patchValue({
      id: dados.id,
      nome: dados.nome,
      ano: dados.ano,
      marca: dados.marca
    });
  }

  save() {
    var result,
      modeloValue = this.formModelo.value;

    if (modeloValue.id) {
      result = this.modeloService.updateModelo(modeloValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Modelo editado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu algum erro ao tentar atualizar os dados do modelo. Verifique se preencheu todos os campos corretamente !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['veiculos/modelo']);
      }, 500);

    } else {
      result = this.modeloService.addModelo(modeloValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Cadastro efetuado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo modelo. Verifique se preencheu todos os campos corretamente !!");
          });

    }

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {

      setTimeout(() => {
        this.router.navigate(['veiculos/modelo']);

      }, 500);
    }
    return;

  }


  verificaValidTouched(campo) {
    return !this.formModelo.get(campo).valid && this.formModelo.get(campo).touched;
  }
}

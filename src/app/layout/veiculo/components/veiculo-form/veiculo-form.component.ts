import { ToasterService } from './../../../../toaster-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { ModeloService } from './../../modelo/shared/service/modelo.service';
import { VeiculoService } from './../../shared/service/veiculo.service';
import { Modelo } from './../../modelo/shared/class/modelo';
import { Veiculo } from '../../shared/class/veiculo';
import { routerTransition } from '../../../../router.animation';
import * as $ from 'jquery';

@Component({
  selector: 'veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css'],
  animations: [routerTransition()]
})
export class VeiculoFormComponent implements OnInit {

  formVeiculo: FormGroup;
  title: string;
  veiculo: Veiculo = new Veiculo();
  modelos: Modelo[];

  public placaMask = [/\D/, /\D/, /\D/, '-', /\d/, /\d/, /\d/, /\d/];
  url: string = "http:177.85.0.23/onnet_frota/veiculos/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/veiculos/edit/";
  mostrarBread: boolean = true;


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private modeloService: ModeloService,
    private toasterService: ToasterService
  ) {
    this.formVeiculo = formBuilder.group({
      id: [''],
      ano_fabricacao: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      chassi: ['', [Validators.required, Validators.minLength(17)]],
      renavam: ['', [Validators.required, Validators.minLength(9)]],
      modelo: formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit() {

    
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    this.modeloService.getModelos()
      .subscribe(modelo => this.modelos = modelo);

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
        this.veiculoService.getVeiculo(id)
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
    this.formVeiculo.patchValue({
      id: dados.id,
      ano_fabricacao: dados.ano_fabricacao,
      cor: dados.cor,
      placa: dados.placa,
      chassi: dados.chassi,
      renavam: dados.renavam,
      modelo: dados.modelo
    })
  }

  save() {
    var result,
      veiculoValue = this.formVeiculo.value;

    if (veiculoValue.id) {
      result = this.veiculoService.updateVeiculo(veiculoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informações do veiculo foram atualizada com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar atualizar os dados do veiculo !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['veiculos']);
      }, 500);
    } else {
      result = this.veiculoService.addVeiculo(veiculoValue)
      .subscribe(
        suc => {
          this.toasterService.Success("Veiculo cadastrado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar o veiculo !!");
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
        this.router.navigate(['veiculos']);
      }, 500);
    }
    return;

  }

  verificaValidTouched(campo) {
    return !this.formVeiculo.get(campo).valid && this.formVeiculo.get(campo).touched;



  }
}

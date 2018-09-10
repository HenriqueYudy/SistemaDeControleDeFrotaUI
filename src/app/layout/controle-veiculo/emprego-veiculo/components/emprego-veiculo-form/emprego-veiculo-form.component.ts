import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../../../router.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Condutor } from './../../../../tecnicos/condutor/shared/class/condutor';
import { VeiculoAlocado } from './../../../veiculo-alocado/shared/class/veiculo-alocado';
import { EmpregoVeiculo } from './../../shared/class/emprego-veiculo';
import { CondutorService } from './../../../../tecnicos/condutor/shared/service/condutor.service';
import { VeiculoAlocadoService } from './../../../veiculo-alocado/shared/service/veiculo-alocado.service';
import { EmpregoVeiculoService } from './../../shared/service/emprego-veiculo.service';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'emprego-veiculo-form',
  templateUrl: './emprego-veiculo-form.component.html',
  styleUrls: ['./emprego-veiculo-form.component.css'],
  animations: [routerTransition()]
})
export class EmpregoVeiculoFormComponent implements OnInit {

  title: string;
  mostrarBread: boolean = true;
  url: string = "http:177.85.0.23/onnet_frota/controleVeiculo/empregoVeiculo/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/controleVeiculo/empregoVeiculo/edit/";

  condutores: Condutor[];
  formEmpregoVeiculo: FormGroup;
  veiculoAlocados: VeiculoAlocado[];
  empregoVeiculo: EmpregoVeiculo = new EmpregoVeiculo();


  public hora = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]
  public dataMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private condutorService: CondutorService,
    private veiculoAlocadoService: VeiculoAlocadoService,
    private empregoVeiculoService: EmpregoVeiculoService,
    private toasterService: ToasterService
  ) {
    this.formEmpregoVeiculo = formBuilder.group({
      id: [''],
      data_utilizacao: ['', [Validators.required]],
      hodometro: ['', [Validators.required]],
      hora_saida: ['', [Validators.required]],
      data_saida: ['', [Validators.required]],
      hora_chegada: ['', []],
      data_chegada: ['', []],
      motivo_utilizacao: ['', [Validators.required]],
      veiculo_alocado: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      condutor: formBuilder.group({
        id: ['', [Validators.required]]
      })
    })
  }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');


    this.condutorService.getCondutores()
      .subscribe(condutores => this.condutores = condutores);

    this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);


    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarBread = false;
    }

    var cod = this.route.params.subscribe(params => {
      var cod = params['id'];

      if (urls == this.urlEdit + cod) {
        $("#dataChegada").removeAttr('readonly');
        $("#horaChegada").removeAttr('readonly');
      }
    })

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        return;
      }

      if (urls == this.urlEdit + id) {
        this.empregoVeiculoService.getEmpregoVeiculo(id)
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
    this.formEmpregoVeiculo.patchValue({
      id: dados.id,
      data_utilizacao: dados.data_utilizacao,
      hodometro: dados.hodometro,
      hora_saida: dados.hora_saida,
      data_saida: dados.data_saida,
      hora_chegada: dados.hora_chegada,
      data_chegada: dados.data_chegada,
      motivo_utilizacao: dados.motivo_utilizacao,
      veiculo_alocado: dados.veiculo_alocado,
      condutor: dados.condutor
    });
  }

  save() {
    var result,
      empregoVeiculoValue = this.formEmpregoVeiculo.value;

    if (empregoVeiculoValue.id) {
      result = this.empregoVeiculoService.updateEmpregoVeiculo(empregoVeiculoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do emprego do veiculo foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do emprego de veiculo !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['controleVeiculo/empregoVeiculo']);
      }, 500);
    } else {
      result = this.empregoVeiculoService.addEmpregoVeiculo(empregoVeiculoValue)
      .subscribe(
        suc =>{
          this.toasterService.Success("Cadastrado efetuado com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo emprego de veiculo !!");
        }
      )
    }

    console.log(empregoVeiculoValue);

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }


    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls == this.url) {
      setTimeout(() => {
        this.router.navigate(['controleVeiculo/empregoVeiculo']);
      }, 500);
    }
  }


  verificaValidTouched(campo) {
    return !this.formEmpregoVeiculo.get(campo).valid && this.formEmpregoVeiculo.get(campo).touched;
  }



}

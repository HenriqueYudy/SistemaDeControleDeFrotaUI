import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { routerTransition } from '../../../../router.animation';
import { VeiculoRastreado } from './../../shared/class/veiculo-rastreado';
import { Rastreador } from './../../../rastreador/shared/class/rastreador';
import { Condutor } from './../../../tecnicos/condutor/shared/class/condutor';
import { VeiculoRastreadoService } from './../../shared/service/veiculo-rastreado.service';
import { RastreadorService } from './../../../rastreador/shared/service/rastreador.service';
import { CondutorService } from './../../../tecnicos/condutor/shared/service/condutor.service';
import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { VeiculoAlocadoService } from './../../../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'servico-rastreamento-form',
  templateUrl: './servico-rastreamento-form.component.html',
  styleUrls: ['./servico-rastreamento-form.component.css'],
  animations: [routerTransition()]
})
export class ServicoRastreamentoFormComponent implements OnInit {

  title: string;
  mostrarBread: boolean = true;
  formVeiculoRastreado: FormGroup;

  url: string = "http:177.85.0.23/onnet_frota/servicoRastreamento/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/servicoRastreamento/edit/";


  rastreadores: Rastreador[];
  veiculoAlocados: VeiculoAlocado[];
  veiculoRastreado: VeiculoRastreado = new VeiculoRastreado;


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private veiculoRastreadoService: VeiculoRastreadoService,
    private veiculoAlocadoService: VeiculoAlocadoService,
    private rastreadorService: RastreadorService,
    private toasterService: ToasterService
  ) {
    this.formVeiculoRastreado = formBuilder.group({
      id: [''],
      data_inicio: ['', [Validators.required]],
      data_termino: ['', []],
      rastreador: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      veiculo_alocado: formBuilder.group({
        id: ['', [Validators.required]]
      })
    })
  }

  ngOnInit() {

      this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);
      
      this.rastreadorService.getRastreadores()
      .subscribe(rastreadores => this.rastreadores = rastreadores);
          
    
    $('html, body').animate({scrollTop:0});

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    
    if (urls != this.url) {
      this.mostrarBread = false;
    }


    var cod = this.route.params.subscribe(params => {
      var cod = params['id'];

      if (urls == this.urlEdit + cod) {

        $("#termino").removeAttr('readonly');

      }
    });

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        return;
      }

      if (urls == this.urlEdit + id) {
        this.veiculoRastreadoService.getVeiculoRastreado(id)
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
    this.formVeiculoRastreado.patchValue({
      id: dados.id,
      data_inicio: dados.data_inicio,
      data_termino: dados.data_termino,
      rastreador: dados.rastreador,
      veiculo_alocado: dados.veiculo_alocado
    });
  }

  save() {
    var result,
      veiculoRastreadoValue = this.formVeiculoRastreado.value;

    if (veiculoRastreadoValue.id) {
      result = this.veiculoRastreadoService.updateVeiculoRastreado(veiculoRastreadoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do veiculo rastreado foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do veiculo rastreado !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['/servicoRastreamento']);
      }, 500);
    } else {
      result = this.veiculoRastreadoService.addVeiculoRastreado(veiculoRastreadoValue)
      .subscribe(
        suc => {
          this.toasterService.Success("Cadastro efetuado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo veiculo rastreado !!");
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
        this.router.navigate(['servicoRastreamento']);
      }, 500);
    }
  }

  verificaValidTouched(campo) {
    return !this.formVeiculoRastreado.get(campo).valid && this.formVeiculoRastreado.get(campo).touched;
  }

  
}

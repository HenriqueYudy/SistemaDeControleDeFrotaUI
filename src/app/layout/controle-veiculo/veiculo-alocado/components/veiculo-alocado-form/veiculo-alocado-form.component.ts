import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Frota } from './../../../../frota/shared/class/frota';
import { routerTransition } from '../../../../../router.animation';
import { Veiculo } from './../../../../veiculo/shared/class/veiculo';
import { VeiculoAlocado } from './../../shared/class/veiculo-alocado';
import { FrotaService } from './../../../../frota/shared/service/frota.service';
import { Condutor } from './../../../../tecnicos/condutor/shared/class/condutor';
import { VeiculoService } from './../../../../veiculo/shared/service/veiculo.service';
import { VeiculoAlocadoService } from './../../shared/service/veiculo-alocado.service';
import { CondutorService } from './../../../../tecnicos/condutor/shared/service/condutor.service';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'veiculo-alocado-form',
  templateUrl: './veiculo-alocado-form.component.html',
  styleUrls: ['./veiculo-alocado-form.component.css'],
  animations: [routerTransition()]
})
export class VeiculoAlocadoFormComponent implements OnInit {

  formVeiculoAlocado: FormGroup;
  title: string;

  veiculoAlocado: VeiculoAlocado = new VeiculoAlocado();
  veiculos: Veiculo[];
  frotas: Frota[];
  condutores: Condutor[];

  mostrarBread: boolean = true;
  url: string = "http:177.85.0.23/onnet_frota/controleVeiculo/veiculoAlocado/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/controleVeiculo/veiculoAlocado/edit/";


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private veiculoAlocadoService: VeiculoAlocadoService,
    private veiculoService: VeiculoService,
    private frotaService: FrotaService,
    private condutorService: CondutorService,
    private toasterService: ToasterService
  ) {
    this.formVeiculoAlocado = formBuilder.group({
      id: [''],
      data_inicio: ['', [Validators.required]],
      data_termino: ['', []],
      veiculo: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      frota: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      condutor: formBuilder.group({
        id: [null, []]
      })
    })
  }

  ngOnInit() {

    this.veiculoService.getVeiculos()
      .subscribe(veiculos => this.veiculos = veiculos);

    this.frotaService.getFrotas()
      .subscribe(frotas => this.frotas = frotas);

    this.condutorService.getCondutores()
      .subscribe(condutores => this.condutores = condutores);


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
        this.veiculoAlocadoService.getVeiculoAlocado(id)
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
    this.formVeiculoAlocado.patchValue({
      id: dados.id,
      data_inicio: dados.data_inicio,
      data_termino: dados.data_termino,
      veiculo: dados.veiculo,
      frota: dados.frota,
      condutor: dados.condutor
    })
  }

  save() {
    var result,
      veiculoAlocadoValue = this.formVeiculoAlocado.value;

    if (veiculoAlocadoValue.id) {

      result = this.veiculoAlocadoService.updateVeiculoAlocado(veiculoAlocadoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do veiculo alocado foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do veiculo alocado !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['controleVeiculo/veiculoAlocado']);
      }, 500);

    } else {
      result = this.veiculoAlocadoService.addVeiculoAlocado(veiculoAlocadoValue)
      .subscribe(
        suc => {
          this.toasterService.Success("Cadastro efetuado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo veiculo alocado !!");
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
        this.router.navigate(['controleVeiculo/veiculoAlocado']);
      }, 500);
    }
  }

  verificaValidTouched(campo) {
    return !this.formVeiculoAlocado.get(campo).valid && this.formVeiculoAlocado.get(campo).touched;
  }

}

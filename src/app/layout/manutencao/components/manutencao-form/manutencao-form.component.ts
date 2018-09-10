import { VeiculoAlocadoService } from './../../../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { Fornecedor } from './../../../fornecedor/shared/class/fornecedor';
import { routerTransition } from '../../../../router.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { Classificacao } from './../../classificacao/shared/class/classificacao';
import { Manutencao } from './../../shared/class/manutencao';
import { ManutencaoService } from '../../shared/service/manutencao.service';
import { ClassificacaoService } from '../../classificacao/shared/service/classificacao.service';
import { FornecedorService } from '../../../fornecedor/shared/service/fornecedor.service';
import { VeiculoAlocado } from '../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'manutencao-form',
  templateUrl: './manutencao-form.component.html',
  styleUrls: ['./manutencao-form.component.css'],
  animations: [routerTransition()]
})
export class ManutencaoFormComponent implements OnInit {

  formManutencao: FormGroup;
  title: string;
  url: string = "http:177.85.0.23/onnet_frota/manutencao/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/manutencao/edit/";
  mostrarPegada: boolean = true;

  manutencao: Manutencao = new Manutencao();
  classificacoes: Classificacao[];
  fornecedores: Fornecedor[];
  veiculoAlocados: VeiculoAlocado[];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private manutencaoService: ManutencaoService,
    private classificacaoService: ClassificacaoService,
    private fornecedorService: FornecedorService,
    private veiculoAlocadoService: VeiculoAlocadoService,
    private toasterService: ToasterService
  ) {
    this.formManutencao = formBuilder.group({
      id: [''],
      descricao_manutencao: ['', [Validators.required]],
      data_manutencao: ['', [Validators.required]],
      veiculo_alocado: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      fornecedor: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      classificacao: formBuilder.group({
        id: ['', [Validators.required]]
      })
    });
  }

  ngOnInit() {

    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarPegada = false;
    }

    this.classificacaoService.getClassificacoes()
      .subscribe(classificacoes => this.classificacoes = classificacoes);

    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => this.fornecedores = fornecedores);

    this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        return;
      }

      if (urls == this.urlEdit + id) {
        this.manutencaoService.getManutencao(id)
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
    console.log(dados);
    this.formManutencao.patchValue({
      id: dados.id,
      descricao_manutencao: dados.descricao_manutencao,
      data_manutencao: dados.data_manutencao,
      classificacao: dados.classificacao,
      fornecedor: dados.fornecedor,
      veiculo_alocado: dados.veiculo_alocado
    });
  }

  save() {
    var result,
      manutencaoValue = this.formManutencao.value;


    if (manutencaoValue.id) {
      result = this.manutencaoService.updateManutencao(manutencaoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informações da manutenção foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados da manutenção !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['manutencao']);
      }, 500);

    } else {
      result = this.manutencaoService.addManuntencao(manutencaoValue)
      .subscribe(
        suc => {
          this.toasterService.Success("Cadastro efetuado com sucesso");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar cadastrar uma nova manutenção");
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

        this.router.navigate(['manutencao']);

      }, 500);
    }
  }

  verificaValidTouched(campo) {
    return !this.formManutencao.get(campo).valid && this.formManutencao.get(campo).touched
  }

}

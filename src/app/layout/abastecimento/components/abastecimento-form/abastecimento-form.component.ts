import { ToasterService } from './../../../../toaster-service';
import { Subscriber } from 'rxjs/Subscriber';
import { VeiculoAlocado } from './../../../controle-veiculo/veiculo-alocado/shared/class/veiculo-alocado';
import { VeiculoAlocadoService } from './../../../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { FornecedorService } from './../../../fornecedor/shared/service/fornecedor.service';
import { Fornecedor } from './../../../fornecedor/shared/class/fornecedor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ErrorHandler, ElementRef, ViewChild } from '@angular/core';
import { Abastecimento } from '../../shared/class/abastecimento';
import { AbastecimentoService } from '../../shared/service/abastecimento.service';
import { routerTransition } from '../../../../router.animation';
import * as jsPDF from 'jspdf';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import * as $ from 'jquery';


@Component({
  selector: 'abastecimento-form',
  templateUrl: './abastecimento-form.component.html',
  styleUrls: ['./abastecimento-form.component.css'],
  animations: [routerTransition()]
})
export class AbastecimentoFormComponent implements OnInit {

  formAbastecimento: FormGroup;
  title: string;
  url: string = "http:177.85.0.23/onnet_frota/abastecimentos/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/abastecimentos/edit/";
  mostrarPegada: boolean = true;

  abastecimento: Abastecimento = new Abastecimento();
  fornecedores: Fornecedor[];
  veiculoAlocados: VeiculoAlocado[];
  _fornecedor: Fornecedor;
  _veiculoAlocado: VeiculoAlocado;

  // DADOS DA REQUISIÇÃO
  dataAbastecimento: any = "";
  cupom_fiscal: any = "";
  _Codigo: any = "";
  _FornecedorId: string = "";
  _VeiculoAlocadoId: any;
  _Litros: any = "";
  _Valor: any = "";
  _Total: any = "";
  _Day: any;
  _Month: any;
  _Year: any;
  _Usuario: any;
  ImprimirReq: boolean = false;
  _NomeFornecedor: any;
  _NomeEmpresa: any;
  _condutor: any;
  _placa: any;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private abastecimentoService: AbastecimentoService,
    private fornecedorService: FornecedorService,
    private veiculoAlocadoService: VeiculoAlocadoService,
    private toasterService: ToasterService

  ) {
    this.formAbastecimento = formBuilder.group({
      id: [''],
      veiculo_alocado: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      numero_cupom_fiscal: [''],
      data_abastecimento: ['', [Validators.required]],
      hodometro: ['', [Validators.required, Validators.maxLength(6)],],
      quantidade_abastecida: ['', [Validators.required]],
      valor_total: ['', [Validators.required]],
      fornecedor: formBuilder.group({
        id: ['', [Validators.required]]
      })
    });

  }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');


    var urls = window.location.protocol + window.location.host + window.location.pathname;
    if (urls != this.url) {
      this.mostrarPegada = false;
    }

    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => this.fornecedores = fornecedores);

    this.veiculoAlocadoService.getVeiculoAlocados()
      .subscribe(veiculoAlocados => this.veiculoAlocados = veiculoAlocados);


    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id) {
        $("#pdfButton").hide();
        return;
      }

      

      if (urls == this.urlEdit + id) {
        this.abastecimentoService.getAbastecimento(id)
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
    this.formAbastecimento.patchValue({
      id: dados.id,
      numero_cupom_fiscal: dados.numero_cupom_fiscal,
      data_abastecimento: dados.data_abastecimento,
      hodometro: dados.hodometro,
      quantidade_abastecida: dados.quantidade_abastecida,
      valor_total: dados.valor_total,
      fornecedor: dados.fornecedor,
      veiculo_alocado: dados.veiculo_alocado
    })
  }

  tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }
    data.push(headers);
    // go through cells
    for (var i = 1; i < table.rows.length; i++) {

      var tableRow = table.rows[i];
      var rowData = {};

      for (var j = 0; j < tableRow.cells.length; j++) {

        rowData[headers[j]] = tableRow.cells[j].innerHTML;

      }

      data.push(rowData);
    }

    return data;
  }

  @ViewChild('pdfContent') content: ElementRef;
  pdfConverter() {


    this._Codigo = $("#codigoAbs").val();
    this._FornecedorId = $("#fornecedor").val();
    this._Litros = $("#litrosAbs").val();
    this.dataAbastecimento = $("#dataAbs").val();
    this._Valor = $("#valorAbs").val();
    this._Total = this._Valor;
    this._VeiculoAlocadoId = $("#veiculo_alocado").val();
    

    var _DataExtraction = this.dataAbastecimento.split("-");
    this._Day = _DataExtraction[2];
    this._Year = _DataExtraction[0];
    this._Month = _DataExtraction[1];
   
    var id = this._FornecedorId;
    var VeiculoId = this._VeiculoAlocadoId;

    this.fornecedorService.getFornecedor(id)
    .subscribe(fornecedor => this._fornecedor = fornecedor);

    this.veiculoAlocadoService.getVeiculoAlocado(this._VeiculoAlocadoId)
    .subscribe(veiculoAlocado => this._veiculoAlocado = veiculoAlocado);



    setTimeout(() => {
      this._NomeFornecedor = this._fornecedor.nome;
    }, 1000);
    
    setTimeout(() => {
      this._NomeEmpresa = this._veiculoAlocado.frota.empresa.nome;
      this._condutor = this._veiculoAlocado.condutor.nome;
      this._placa = this._veiculoAlocado.veiculo.placa;
    }, 1000);
  
    this._Usuario = sessionStorage.getItem("UserName");

    this.ImprimirReq = true;


    setTimeout(() => {
      window.print();
    }, 1000);

    setTimeout(() => {
      this.ImprimirReq = false;
    }, 1000);

  }


  save() {
    var result,
      abastecimentoValue = this.formAbastecimento.value;

    if (abastecimentoValue.id) {
      result = this.abastecimentoService.updateAbastecimento(abastecimentoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do abastecimento foram alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do abastecimento !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['/abastecimentos'])
      }, 500);
    } else {
      result = this.abastecimentoService.addAbastecimento(abastecimentoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Cadastro efetuado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo abastecimento !!");
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

        this.router.navigate(['abastecimentos']);

      }, 500);
    }
  }



  verificaValidTouched(campo) {
    return !this.formAbastecimento.get(campo).valid && this.formAbastecimento.get(campo).touched;
  }



}

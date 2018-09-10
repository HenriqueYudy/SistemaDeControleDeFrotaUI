import { ItemManutencao } from './../../shared/class/item-manutencao';
import { ItemManutencaoService } from './../../shared/services/item-manutencao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProdutoServicoService } from './../../../produto-servico/shared/services/produto-servico.service';
import { ManutencaoService } from './../../../manutencao/shared/service/manutencao.service';
import { ProdutoServico } from '../../../produto-servico/shared/class/produto-servico';
import { Manutencao } from '../../../manutencao/shared/class/manutencao';
import { routerTransition } from '../../../../router.animation';
import * as $ from 'jquery';
import { ItemSelecionados } from './itemSelecioado';
import { all } from 'q';
import { ManutencaoAdminComponent } from '../../../manutencao/components/manutencao-admin/manutencao-admin.component';
import { ToasterService } from '../../../../toaster-service';


@Component({
  selector: 'item-manutencao-form',
  templateUrl: './item-manutencao-form.component.html',
  styleUrls: ['./item-manutencao-form.component.css'],
  animations: [routerTransition()]
})
export class ItemManutencaoFormComponent implements OnInit {

  formItemManutencao: FormGroup;
  title: string;
  itemManutencao: ItemManutencao = new ItemManutencao();
  manutencoes: Manutencao[];

  produto_servicos: ProdutoServico[];
  itemSelecionados: ItemSelecionados[] = [];


  url: string = "http:177.85.0.23/onnet_frota/itemManutencao/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/itemManutencao/edit/";
  mostrarBread: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private manutencaoService: ManutencaoService,
    private produtoServicoService: ProdutoServicoService,
    private itemManutencaoService: ItemManutencaoService,
    private toasterService: ToasterService
  ) {
    this.formItemManutencao = formBuilder.group({
      id: [''],
      manutencao: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      produto_servico: formBuilder.group({
        id: ['', [Validators.required]]
      }),
      quantidade: ['', [Validators.required]],
      valor_unitario: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');


    this.manutencaoService.getManutencoes()
      .subscribe(manutencao => this.manutencoes = manutencao);

    this.produtoServicoService.getProdutoServicos()
      .subscribe(produto_servicos => this.produto_servicos = produto_servicos);


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

        this.itemManutencaoService.getItemManutencao(id)
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

  remove(element: any) {
    var resp = confirm("Deseja mesmo remover este item ?");
    if(resp == true){
      this.itemSelecionados.splice(this.itemSelecionados.indexOf(element.id), 1);
      this.toasterService.Info("Item removido da lista");
    } else {
      return;
    }
  }

  pegaValorLinha() {

    $("tr").click(function () {

      $(this).addClass('selected').siblings().removeClass('selected');

      var value = $(this).find('td:eq(0)').html();
      var nome = $(this).find('td:eq(1)').html();
      var valor = $(this).find('td:eq(2)').html();
      var descricao = $(this).find('td:eq(3)').html();
      var quantidade = $("#quantidade").val();
      var valor_unit = $("#valor_unitario").val();

      $("#chave").val(value.trim());
      $("#produto").val(nome.trim());
      $("#valor").val(valor.trim());
      $("#descricao").val(descricao.trim());
    });


    var chave = $("#chave").val();
    var nome = $("#produto").val();
    var valor = $("#valor").val();
    var valor_unit = $("#valor_unitario").val();
    var quantidade = $("#quantidade").val();
    var descricao = $("#descricao").val();


    let item = {
      id: chave,
      nome: nome,
      valor: valor,
      valor_unitario: valor_unit.trim(),
      quantidade: quantidade.trim(),
      descricao: descricao
    };

    return item;

  }

  adicionar() {
    var novoItem = this.pegaValorLinha();
    if ($("#quantidade").val() == "" || $("#valor_unitario").val() == "") {
      this.toasterService.Error("Insere uma quantidade e o valor unitario do item que deseja adicionar.")
      return;
    }
    if (novoItem.id == "") {
      this.toasterService.Error("Selecione um item");
      return;
    }
    this.itemSelecionados.push(novoItem);
    $("#quantidade").val("");
    $("#valor_unitario").val("");
    this.toasterService.Info("Item adicionado na lista");
  }

  resetarLista() {
    var resp = confirm("Deseja mesmo limpar a lista ?");
    if (resp == true) {
      for (var i = this.itemSelecionados.length; i--;) {
        this.itemSelecionados.pop();
      }
      this.toasterService.Info("Itens selecionados foram removidos");
    } else {
      return;
    }
  }

  //Eventos
  popularDadosForm(dados) {
    this.formItemManutencao.patchValue({
      id: dados.id,
      manutencao: dados.manutencao,
      produto_servico: dados.produto_servico,
      quantidade: dados.quantidade,
      valor_unitario: dados.valor_unitario
    });
  }

  save() {

    if (this.itemSelecionados.length == 0) {
      alert("Adicione pelo menos 1 item na lista");
      return;
    }

    for (var i = 0; i < this.itemSelecionados.length;) {


      $("#produtoS").val(this.itemSelecionados[i].id);
      $("#quantidadeForm").val(this.itemSelecionados[i].quantidade);
      $("#valor_unit").val(this.itemSelecionados[i].valor_unitario);

      var manutencaoID = $("#manutencaoID").val();
      var produtoServicoID = $("#produtoS").val();
      var quantidadeProduto = $("#quantidadeForm").val();
      var valorUnitario = $("#valor_unit").val();

      this.formItemManutencao.patchValue({
        id: '',
        manutencao: manutencaoID,
        produto_servico: {
          id: produtoServicoID
        },
        quantidade: quantidadeProduto,
        valor_unitario: valorUnitario
      });

      var result, itemManutencaoValue = this.formItemManutencao.value;

      console.log(itemManutencaoValue);
      this.itemManutencaoService.addItemManutencao(itemManutencaoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Itens adicionado com sucesso");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao adicionar os itens");
          }
        );

      i++;
    }

    var forms = document.getElementsByTagName("form")

    for (var i = 0; i < forms.length; i++) {
      forms[i].reset();
    }
    this.itemSelecionados = [];

  }

  verificaValidTouched(campo) {
    return !this.formItemManutencao.get(campo).valid && this.formItemManutencao.get(campo).touched;

  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


}

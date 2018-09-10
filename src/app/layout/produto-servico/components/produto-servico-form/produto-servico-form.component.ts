import { ProdutoServicoService } from './../../shared/services/produto-servico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoServico } from '../../shared/class/produto-servico';
import { ToasterService } from '../../../../toaster-service';
import * as $ from 'jquery';

@Component({
  selector: 'produto-servico-form',
  templateUrl: './produto-servico-form.component.html',
  styleUrls: ['./produto-servico-form.component.css'],
})
export class ProdutoServicoFormComponent implements OnInit {

  formProdutoServico: FormGroup;
  title: string;
  url: string = "http:177.85.0.23/onnet_frota/produtoServicos/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/produtoServicos/edit/";
  mostrarBread: boolean = true;

  produtoServico: ProdutoServico = new ProdutoServico();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtoServicoService: ProdutoServicoService,
    private toasterService: ToasterService
  ) {
    this.formProdutoServico = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

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
        this.produtoServicoService.getProdutoServico(id)
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
    this.formProdutoServico.patchValue({
      id: dados.id,
      nome: dados.nome,
      descricao: dados.descricao,
      valor: dados.valor
    });
  }

  save() {
    var result,
      produtoServicoValue = this.formProdutoServico.value;

    if (produtoServicoValue.id) {
      result = this.produtoServicoService.updateProdutoServico(produtoServicoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do produto e serviços foram alterados com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do produto e serviço !!");
          }
        );
      setTimeout(() => {
        this.router.navigate(['produtoServicos']);
      }, 500);
    } else {
      result = this.produtoServicoService.addProdutoServico(produtoServicoValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Cadastro efetuado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo produto e servico");
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
        this.router.navigate(['/produtoServicos']);

      }, 500);
    }
  }


  verificaValidTouched(campo) {
    return !this.formProdutoServico.get(campo).valid && this.formProdutoServico.get(campo).touched
  }

}

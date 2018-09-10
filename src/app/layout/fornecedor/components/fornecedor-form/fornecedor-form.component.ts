import { ToasterService } from './../../../../toaster-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../../../router.animation';


import { FornecedorService } from './../../shared/service/fornecedor.service';
import { Fornecedor } from './../../shared/class/fornecedor';

@Component({
  selector: 'fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css'],
  animations: [routerTransition()]
})
export class FornecedorFormComponent implements OnInit {

  formFornecedor: FormGroup;
  title: string;
  fornecedor: Fornecedor = new Fornecedor();

  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mostrarBread: boolean = true;
  url: string = "http:177.85.0.23/onnet_frota/fornecedor/form";
  urlEdit: string = "http:177.85.0.23/onnet_frota/fornecedor/edit/";


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private forncedorService: FornecedorService,
    private toasterService: ToasterService
  ) {
    this.formFornecedor = formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      cnpj: ['', [Validators.required]]

    })
  }

  ngOnInit() {

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

        this.forncedorService.getFornecedor(id)
          .subscribe(
            dados => this.popularDadosForm(dados),
            response => {
              if (response.status == 404) {
                this.router.navigate(['NotFound']);
              }
            }
          )
      }
      if (urls == this.urlEdit + id) {
        this.mostrarBread = true;
      }
    });


  }

  popularDadosForm(dados) {
    this.formFornecedor.patchValue({
      id: dados.id,
      nome: dados.nome,
      cnpj: dados.cnpj
    });
  }

  save() {
    var result,
      fornecedorValue = this.formFornecedor.value;


    if (fornecedorValue.id) {
      result = this.forncedorService.updateFornecedor(fornecedorValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Informação do fornecedor alteradas com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar alterar os dados do fornecedor !!");
          }
        )
      setTimeout(() => {
        this.router.navigate(['fornecedor']);
      }, 700);

    } else {
      result = this.forncedorService.addFornecedor(fornecedorValue)
        .subscribe(
          suc => {
            this.toasterService.Success("Cadastro efetuado com sucesso !!");
          },
          err => {
            this.toasterService.Error("Ocorreu um erro ao tentar cadastrar um novo fornecedor !!");
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

        this.router.navigate(['fornecedor']);

      }, 700);
    }
    return;
  }

  verificaValidTouched(campo) {
    return !this.formFornecedor.get(campo).valid && this.formFornecedor.get(campo).touched;
  }
}

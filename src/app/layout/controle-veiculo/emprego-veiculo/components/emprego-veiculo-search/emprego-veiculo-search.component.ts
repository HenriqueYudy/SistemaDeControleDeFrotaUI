import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmpregoVeiculoService } from '../../shared/service/emprego-veiculo.service';
import * as $ from 'jquery';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'emprego-veiculo-search',
  templateUrl: './emprego-veiculo-search.component.html',
  styleUrls: ['./emprego-veiculo-search.component.css']
})
export class EmpregoVeiculoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private empregoVeiculoService: EmpregoVeiculoService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  editar() {
    if (this.seletorEditar == false) {
      this.seletorEditar = true;
    } else {
      this.seletorEditar = false;
    }
  }

  editarItem() {
    var id = $("#campoEditar").val();
    var item = this.empregoVeiculoService.getEmpregoVeiculo(id);
    this.router.navigate(['controleVeiculo/empregoVeiculo/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta informação?")
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.empregoVeiculoService.deleteEmpregoVeiculo(id)
      .subscribe(
        suc =>{
          this.toasterService.Warning("Exclusão do emprego de veiculo foi realizada com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o emprego de veiculo");
        }
      );

    }

  }

}

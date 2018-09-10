import { ToasterService } from './../../../../../toaster-service';
import { Router } from '@angular/router';
import { VeiculoAlocadoService } from './../../shared/service/veiculo-alocado.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'veiculo-alocado-search',
  templateUrl: './veiculo-alocado-search.component.html',
  styleUrls: ['./veiculo-alocado-search.component.css']
})
export class VeiculoAlocadoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private veiculoAlocadoService: VeiculoAlocadoService,
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
    var item = this.veiculoAlocadoService.getVeiculoAlocado(id);
    this.router.navigate(['controleVeiculo/veiculoAlocado/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta alocação de veiculo?");
    if (resp == true) {

      var id = $("#campoDeletar").val();
      this.veiculoAlocadoService.deleteVeiculoAlocado(id)
      .subscribe(
        suc =>{
          this.toasterService.Warning("Exclusão do veiculo alocado foi realizada com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o veiculo alocado !!");
        }
      )
    }

  }





}

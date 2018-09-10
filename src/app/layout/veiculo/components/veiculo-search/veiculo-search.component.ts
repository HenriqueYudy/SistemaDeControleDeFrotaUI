import { ToasterService } from './../../../../toaster-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../shared/service/veiculo.service';
import * as $ from 'jquery';

@Component({
  selector: 'veiculo-search',
  templateUrl: './veiculo-search.component.html',
  styleUrls: ['./veiculo-search.component.css']
})
export class VeiculoSearchComponent implements OnInit {

  seletorDelete: Boolean = false;
  seletorEditar: Boolean = false;

  constructor(
    private veiculoService: VeiculoService,
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
    var item = this.veiculoService.getVeiculo(id);

    this.router.navigate(['veiculos/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }


  deletarItem() {
    var resp = confirm("Deseja realmente deletar este veiculo?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.veiculoService.deleteVeiculo(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("A exclusão do veiculo foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o veiculo ou o seu usuario não tem permissão !!");
        }
      )
    }
    return;
  }

}

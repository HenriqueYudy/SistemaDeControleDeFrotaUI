import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../../shared/service/manutencao.service';
import * as $ from 'jquery';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'manutencao-search',
  templateUrl: './manutencao-search.component.html',
  styleUrls: ['./manutencao-search.component.css']
})
export class ManutencaoSearchComponent implements OnInit {


  seletorDelete: boolean = false;
  seletorEditar: boolean = false;


  constructor(
    private manutencaoService: ManutencaoService,
    private router: Router,
    private toasterService : ToasterService
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
    var item = this.manutencaoService.getManutencao(id);

    this.router.navigate(['manutencao/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta manutenção");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.manutencaoService.deleteManutencao(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão da manutenção foi realizada com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar a manutenção ou seu usuario não tem permissão !!");
        }
      );
    }
  }
}

import { Router } from '@angular/router';
import { FrotaService } from './../../shared/service/frota.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../toaster-service';


@Component({
  selector: 'frota-search',
  templateUrl: './frota-search.component.html',
  styleUrls: ['./frota-search.component.css']
})
export class FrotaSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private frotaService: FrotaService,
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
    var item = this.frotaService.getFrota(id);

    this.router.navigate(['frotas/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta frota?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.frotaService.deleteFrota(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão da frota foi realizada com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar a frota !!");
        }
      );
    }
    return;
  }


}

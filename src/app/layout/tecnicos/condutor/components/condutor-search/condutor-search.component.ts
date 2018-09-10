import { Router } from '@angular/router';
import { CondutorService } from './../../shared/service/condutor.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../../toaster-service';

@Component({
  selector: 'condutor-search',
  templateUrl: './condutor-search.component.html',
  styleUrls: ['./condutor-search.component.css']
})
export class CondutorSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;



  constructor(
    private condutorService: CondutorService,
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
    var item = this.condutorService.getCondutor(id);

    this.router.navigate(['tecnicos/condutor/edit/' + id]);
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar este condutor");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      this.condutorService.deleteCondutor(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("A exclusão do condutor foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o condutor  ou o seu usuario não tem permissão !!");
        }
      )
    }
  }

}

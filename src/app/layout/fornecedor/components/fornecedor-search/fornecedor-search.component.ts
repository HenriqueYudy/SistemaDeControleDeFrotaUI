import { ToasterService } from './../../../../toaster-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../shared/service/fornecedor.service';
import * as $ from 'jquery';


@Component({
  selector: 'fornecedor-search',
  templateUrl: './fornecedor-search.component.html',
  styleUrls: ['./fornecedor-search.component.css']
})
export class FornecedorSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private fornecedorService: FornecedorService,
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
    var item = this.fornecedorService.getFornecedor(id);

    this.router.navigate(['fornecedor/edit/' + id]);
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
      this.fornecedorService.deleteFornecedor(id)
      .subscribe(
        suc => {
          this.toasterService.Warning("Exclusão do fornecedor foi realizada com sucesso !!");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar deletar o fornecedor ou seu usuario não tem permissão !!");
        }
      );
    }else{
      return;
    }
  }
}

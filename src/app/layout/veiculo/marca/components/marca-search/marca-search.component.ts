import { Router } from '@angular/router';
import { MarcaService } from './../../shared/service/marca.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToasterService } from '../../../../../toaster-service';
import { MarcaTableComponent } from '../marca-table/marca-table.component';

@Component({
  selector: 'marca-search',
  templateUrl: './marca-search.component.html',
  styleUrls: ['./marca-search.component.css']
})
export class MarcaSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private marcaService: MarcaService,
    private router: Router,
    private toasterService: ToasterService,
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

  editarMarca(){
    var id = $("#campoEditarMarca").val();
    var item = this.marcaService.getMarca(id);

    this.router.navigate(['veiculos/marca/edit/' + id]);
  }

  visualizar(){
    this.toasterService.Info("Ação em desenvolvimento");
  }

  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
    
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta marca ?");

    if(resp == true){
      var id = $("#campoDeletar").val();
      this.marcaService.deleteMarca(id).subscribe(
        suc => {
          this.toasterService.Success("A exclusão da marca foi realizado com sucesso !!");
        },
        err => {
          this.toasterService.Error("Ocorreu um erro ao tentar excluir a marca ou o seu usuario não tem permissão !!")
          this.toasterService.Error("Verifique se o registro não tem vinculo !!");
        });       
    }else{
      return;
    }
  }

}


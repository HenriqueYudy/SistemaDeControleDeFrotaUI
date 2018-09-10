import { ToasterService } from './../../../../toaster-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemManutencaoService } from '../../shared/services/item-manutencao.service';
import * as $ from 'jquery';

@Component({
  selector: 'item-manutencao-search',
  templateUrl: './item-manutencao-search.component.html',
  styleUrls: ['./item-manutencao-search.component.css']
})
export class ItemManutencaoSearchComponent implements OnInit {

  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private itemManutencaoService: ItemManutencaoService,
    private router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }


  deletar() {
    if (this.seletorDelete == false) {
      this.seletorDelete = true;
    } else {
      this.seletorDelete = false;
    }
  }

  deletarItem() {
    var resp = confirm("Deseja realmente deletar esta informação?");
    if (resp == true) {
      var id = $("#campoDeletar").val();
      console.log(id);
      this.itemManutencaoService.deleteItemManutencao(id)
      .subscribe(
        suc => {
          this.toasterService.Success("Item deletado com sucesso !");
        },
        err =>{
          this.toasterService.Error("Ocorreu um erro ao tentar deletar este item");
        }
      );
    } else {
      return;
    }
  }

}

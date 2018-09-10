import { Component, OnInit } from '@angular/core';
import { CondutorService } from '../../condutor/shared/service/condutor.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'tecnicos-search',
  templateUrl: './tecnicos-search.component.html',
  styleUrls: ['./tecnicos-search.component.css']
})
export class TecnicosSearchComponent implements OnInit {


  seletorDelete: boolean = false;
  seletorEditar: boolean = false;

  constructor(
    private condutorService: CondutorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  editar(){
    if(this.seletorEditar == false){
      this.seletorEditar = true;
    }else{
      this.seletorEditar = false;
    }
  }

  editarItem(){
    var id = $("#campoEditar").val();
    var item = this.condutorService.getCondutor(id);
    this.router.navigate(['tecnicos/condutor/'+id]);
  }

  deletar(){
    if(this.seletorDelete == false){
      this.seletorDelete = true;
    }else{
      this.seletorDelete = false;
    }
  }

  deletarItem(){
    var id = $("#campoDeletar").val();
    this.condutorService.deleteCondutor(id);
  }

}

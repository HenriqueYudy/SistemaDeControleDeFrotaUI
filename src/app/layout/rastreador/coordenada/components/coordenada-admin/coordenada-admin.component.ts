import { CoordenadaService } from './../../shared/service/coordenada.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'coordenada-admin',
  templateUrl: './coordenada-admin.component.html',
  styleUrls: ['./coordenada-admin.component.css']
})
export class CoordenadaAdminComponent implements OnInit {

  constructor(private coordenadaService: CoordenadaService) { }

  ngOnInit() {
    $('html, body').animate({scrollTop:0}, 'slow');
  }


  procurar(){

    var imei = $("#imei").val();
    this.coordenadaService.getCoordenada(imei)
    .subscribe({
      
      error(err) {alert("Houve um erro ao tentar cadastrar o novo rastreador")},
      complete() {alert("O rastreador foi codastrado com sucesso")}
    });;
    
  
  }

}

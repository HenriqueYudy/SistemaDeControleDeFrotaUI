import { MarcaService } from './../../shared/service/marca.service';
import { Marca } from './../../shared/class/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marca-table',
  templateUrl: './marca-table.component.html',
  styleUrls: ['./marca-table.component.css']
})
export class MarcaTableComponent implements OnInit {

  marcas: Marca[];


  constructor(private marcaService: MarcaService) { }

  ngOnInit() {
    this.marcaService.getMarcas()
      .subscribe(marcas => this.marcas = marcas);

  }

  atualizarTabela(){
    this.marcaService.getMarcas()
    .subscribe(marcas => this.marcas = marcas);
  }

}

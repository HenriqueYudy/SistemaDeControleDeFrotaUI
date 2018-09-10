import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../../shared/service/manutencao.service';
import { Manutencao } from '../../shared/class/manutencao';

@Component({
  selector: 'manutencao-table',
  templateUrl: './manutencao-table.component.html',
  styleUrls: ['./manutencao-table.component.css']
})
export class ManutencaoTableComponent implements OnInit {

  manutencoes: Manutencao[];

  constructor(private manutencaoService: ManutencaoService) { }

  ngOnInit() {
    this.manutencaoService.getManutencoes()
      .subscribe(manutencoes => this.manutencoes = manutencoes);
  }

}

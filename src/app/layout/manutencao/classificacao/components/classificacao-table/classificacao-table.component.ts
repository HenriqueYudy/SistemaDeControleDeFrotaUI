import { Classificacao } from './../../shared/class/classificacao';
import { Component, OnInit } from '@angular/core';
import { ClassificacaoService } from '../../shared/service/classificacao.service';

@Component({
  selector: 'classificacao-table',
  templateUrl: './classificacao-table.component.html',
  styleUrls: ['./classificacao-table.component.css']
})
export class ClassificacaoTableComponent implements OnInit {

  classificacoes: Classificacao[];

  constructor(private classificacaoService: ClassificacaoService) { }

  ngOnInit() {
    this.classificacaoService.getClassificacoes()
      .subscribe(classificacoes => this.classificacoes = classificacoes);
  }

}

import { ManutencaoService } from './../../../manutencao/shared/service/manutencao.service';
import { ItemManutencaoService } from './../../shared/services/item-manutencao.service';
import { Component, OnInit } from '@angular/core';
import { ItemManutencao } from '../../shared/class/item-manutencao';
import { Manutencao } from '../../../manutencao/shared/class/manutencao';

@Component({
  selector: 'item-manutencao-table',
  templateUrl: './item-manutencao-table.component.html',
  styleUrls: ['./item-manutencao-table.component.css']
})
export class ItemManutencaoTableComponent implements OnInit {

  itemManutencoes: ItemManutencao[];
  

  constructor(
    private itemManutencaoService: ItemManutencaoService
  ) { }


  ngOnInit() {
    this.itemManutencaoService.getItemManutencoes()
      .subscribe(itemManutencao => this.itemManutencoes = itemManutencao);
  }

}

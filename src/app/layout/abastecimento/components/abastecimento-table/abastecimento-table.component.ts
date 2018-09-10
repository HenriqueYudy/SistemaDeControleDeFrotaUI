import { AbastecimentoService } from './../../shared/service/abastecimento.service';
import { Abastecimento } from './../../shared/class/abastecimento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abastecimento-table',
  templateUrl: './abastecimento-table.component.html',
  styleUrls: ['./abastecimento-table.component.css']
})
export class AbastecimentoTableComponent implements OnInit {


  abastecimentos: Abastecimento[];

  constructor(
    private abastecimentoService: AbastecimentoService
  ) { }

  ngOnInit() {
    this.abastecimentoService.getAbastecimentos()
      .subscribe(abastecimentos => this.abastecimentos = abastecimentos);
  }

}

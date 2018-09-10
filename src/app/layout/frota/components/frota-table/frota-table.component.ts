import { Component, OnInit } from '@angular/core';
import { FrotaService } from '../../shared/service/frota.service';
import { Frota } from '../../shared/class/frota';

@Component({
  selector: 'frota-table',
  templateUrl: './frota-table.component.html',
  styleUrls: ['./frota-table.component.css']
})
export class FrotaTableComponent implements OnInit {

  frotas: Frota[];

  constructor(private frotaService: FrotaService) { }


  ngOnInit() {
    this.frotaService.getFrotas()
      .subscribe(frotas => this.frotas = frotas);
  }

}

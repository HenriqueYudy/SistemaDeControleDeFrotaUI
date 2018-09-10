import { PermissaoService } from './../../shared/service/permissao.service';
import { Permissao } from './../../shared/class/permissao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'permissao-table',
  templateUrl: './permissao-table.component.html',
  styleUrls: ['./permissao-table.component.css']
})
export class PermissaoTableComponent implements OnInit {

  permissoes: Permissao[];

  constructor(private permissaoService: PermissaoService) { }

  ngOnInit() {
    this.permissaoService.getPermissoes()
      .subscribe(permissoes => this.permissoes = permissoes)
  }

}

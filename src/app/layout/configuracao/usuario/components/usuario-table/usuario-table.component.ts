import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/class/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'usuario-table',
  templateUrl: './usuario-table.component.html',
  styleUrls: ['./usuario-table.component.css']
})
export class UsuarioTableComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

}

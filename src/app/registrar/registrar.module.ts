import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';
import { registrarRoutingModule } from './registrar.routing.module';
import { UsuarioService } from '../layout/configuracao/usuario/shared/service/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    registrarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegistrarComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class RegistrarModule { }

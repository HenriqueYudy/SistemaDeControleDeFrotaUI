import { UsuarioService } from './../configuracao/usuario/shared/service/usuario.service';
import { TokenStorage } from './../../shared/token/tokenStorage';
import { HttpModule } from '@angular/http';
import { PerfilBodyComponent } from './components/perfil-body/perfil-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil.routing.module';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from '../../toaster-service';
import { CampoInvalidModule } from '../../campo-invalid/campo-invalid.module';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    CampoInvalidModule

  ],
  declarations: [
    PerfilComponent,
    PerfilAdminComponent,
    PerfilBodyComponent
  ],
  providers: [
    TokenStorage,
    UsuarioService,
    ToasterService
  ],
  exports: []
})
export class PerfilModule { }

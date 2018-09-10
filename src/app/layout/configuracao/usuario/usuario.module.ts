import { ToasterService } from './../../../toaster-service';
import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UsuarioComponent } from './usuario.component';
import { UsuarioSearchComponent } from './components/usuario-search/usuario-search.component';
import { UsuarioTableComponent } from './components/usuario-table/usuario-table.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioHeaderComponent } from './components/usuario-header/usuario-header.component';
import { UsuarioToolsComponent } from './components/usuario-tools/usuario-tools.component';
import { UsuarioAdminComponent } from './components/usuario-admin/usuario-admin.component';
import { usuarioRoutingModule } from './usuario.routing.module';
import { UsuarioService } from './shared/service/usuario.service';

import { DataTableModule, DataTable } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import {PanelModule} from 'primeng/panel';
import {DragDropModule} from 'primeng/dragdrop';



@NgModule({
  imports: [
    CommonModule,
    usuarioRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule,
    CampoInvalidModule
  ],
  declarations: [
    UsuarioComponent,
    UsuarioAdminComponent,
    UsuarioToolsComponent,
    UsuarioHeaderComponent,
    UsuarioSearchComponent,
    UsuarioFormComponent,
    UsuarioTableComponent
  ],
  providers: [
    UsuarioService,
    ToasterService
  ]
})
export class UsuarioModule { }

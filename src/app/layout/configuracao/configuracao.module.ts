import { PermissaoModule } from './permissao/permissao.module';
import { UsuarioPermissaoService } from './shared/service/usuario-permissao.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsuarioModule } from './usuario/usuario.module';
import { ConfiguracaoComponent } from './configuracao.component';
import { ConfiguracaoRoutingModule } from './configuracao.routing.module';
import { ConfiguracaoTableComponent } from './components/configuracao-table/configuracao-table.component';
import { ConfiguracaoAdminComponent } from './components/configuracao-admin/configuracao-admin.component';
import { ConfiguracaoToolsComponent } from './components/configuracao-tools/configuracao-tools.component';
import { ConfiguracaoSearchComponent } from './components/configuracao-search/configuracao-search.component';
import { ConfiguracaoHeaderComponent } from './components/configuracao-header/configuracao-header.component';


import { DataTableModule, DataTable } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import {PanelModule} from 'primeng/panel';
import { PermissaoService } from './permissao/shared/service/permissao.service';
import {DragulaModule} from 'ng2-dragula';
import { ToasterService } from '../../toaster-service';




@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    PermissaoModule,
    ConfiguracaoRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    PanelModule,
    DataTableModule,
    DragulaModule
  ],
  declarations: [
    ConfiguracaoComponent,
    ConfiguracaoAdminComponent,
    ConfiguracaoToolsComponent,
    ConfiguracaoSearchComponent,
    ConfiguracaoHeaderComponent,
    ConfiguracaoTableComponent,
  ],
  providers: [
    UsuarioPermissaoService,
    PermissaoService,
    ToasterService
  ]
})
export class ConfiguracaoModule { }

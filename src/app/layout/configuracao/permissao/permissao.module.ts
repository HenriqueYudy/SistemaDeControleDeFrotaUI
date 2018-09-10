import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PermissaoComponent } from './permissao.component';
import { PermissaoService } from './shared/service/permissao.service';
import { PermissaoRoutingModule } from './permissao.routing.module';
import { PermissaoFormComponent } from './components/permissao-form/permissao-form.component';
import { PermissaoTableComponent } from './components/permissao-table/permissao-table.component';
import { PermissaoToolsComponent } from './components/permissao-tools/permissao-tools.component';
import { PermissaoAdminComponent } from './components/permissao-admin/permissao-admin.component';
import { PermissaoHeaderComponent } from './components/permissao-header/permissao-header.component';
import { PermissaoSearchComponent } from './components/permissao-search/permissao-search.component';


import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { ToasterService } from '../../../toaster-service';


@NgModule({
  imports: [
    CommonModule,
    PermissaoRoutingModule,
    ReactiveFormsModule,
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
    PermissaoComponent,
    PermissaoAdminComponent,
    PermissaoToolsComponent,
    PermissaoHeaderComponent,
    PermissaoTableComponent,
    PermissaoFormComponent,
    PermissaoSearchComponent
  ],
  providers: [
    PermissaoService,
    ToasterService
  ]
})
export class PermissaoModule { }

import { ToasterService } from './../../../toaster-service';
import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClassificacaoService } from './shared/service/classificacao.service';
import { ClassificacaoTableComponent } from './components/classificacao-table/classificacao-table.component';
import { ClassificacaoSearchComponent } from './components/classificacao-search/classificacao-search.component';
import { ClassificacaoHeaderComponent } from './components/classificacao-header/classificacao-header.component';
import { ClassificacaoComponent } from './classificacao.component';
import { ClassificacaoRoutingModule } from './classificacao.routing.module';
import { ClassificacaoAdminComponent } from './components/classificacao-admin/classificacao-admin.component';
import { ClassificacaoToolsComponent } from './components/classificacao-tools/classificacao-tools.component';
import { ClassificacaoFormComponent } from './components/classificacao-form/classificacao-form.component';

import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  imports: [
    CommonModule,
    ClassificacaoRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule,
    CampoInvalidModule
  ],
  declarations: [
    ClassificacaoComponent,
    ClassificacaoAdminComponent,
    ClassificacaoToolsComponent,
    ClassificacaoHeaderComponent,
    ClassificacaoSearchComponent,
    ClassificacaoTableComponent,
    ClassificacaoFormComponent

  ],
  providers: [
    ClassificacaoService,
    ToasterService
  ],
  exports: [
    ClassificacaoFormComponent
  ]
})
export class ClassificacaoModule { }

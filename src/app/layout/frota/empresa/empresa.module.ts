import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { EmpresaComponent } from './empresa.component';
import { EmpresaAdminComponent } from './components/empresa-admin/empresa-admin.component';
import { EmpresaToolsComponent } from './components/empresa-tools/empresa-tools.component';
import { EmpresaHeaderComponent } from './components/empresa-header/empresa-header.component';
import { EmpresaSearchComponent } from './components/empresa-search/empresa-search.component';
import { EmpresaTableComponent } from './components/empresa-table/empresa-table.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { EmpresaRoutingModule } from './empresa.routing.module';

import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { EmpresaService } from './shared/service/empresa.service';
import { ToasterService } from '../../../toaster-service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    EmpresaRoutingModule,
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
    EmpresaComponent,
    EmpresaAdminComponent,
    EmpresaToolsComponent,
    EmpresaHeaderComponent,
    EmpresaSearchComponent,
    EmpresaTableComponent,
    EmpresaFormComponent
  ],
  exports: [
    EmpresaFormComponent
  ],
  providers:[
    EmpresaService,
    ToasterService
  ]
})
export class EmpresaModule { }

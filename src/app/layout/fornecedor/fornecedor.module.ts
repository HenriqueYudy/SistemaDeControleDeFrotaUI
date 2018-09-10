import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FornecedorRoutingModule } from './fornecedor.routing.module';
import { FornecedorService } from './shared/service/fornecedor.service';
import { FornecedorTableComponent } from './components/fornecedor-table/fornecedor-table.component';
import { FornecedorToolsComponent } from './components/fornecedor-tools/fornecedor-tools.component';
import { FornecedorAdminComponent } from './components/fornecedor-admin/fornecedor-admin.component';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorHeaderComponent } from './components/fornecedor-header/fornecedor-header.component';
import { FornecedorSearchComponent } from './components/fornecedor-search/fornecedor-search.component';
import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';

import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { ToasterService } from '../../toaster-service';



@NgModule({
  imports: [
    CommonModule,
    FornecedorRoutingModule,
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
    FornecedorComponent,
    FornecedorAdminComponent,
    FornecedorHeaderComponent,
    FornecedorToolsComponent,
    FornecedorSearchComponent,
    FornecedorTableComponent,
    FornecedorFormComponent
  ],
  providers: [
    FornecedorService,
    ToasterService
  ],
  exports: [
    FornecedorFormComponent
  ]
})
export class FornecedorModule { }

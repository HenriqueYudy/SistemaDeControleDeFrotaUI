import { ToasterService } from './../../toaster-service';
import { VeiculoAlocadoModule } from './../controle-veiculo/veiculo-alocado/veiculo-alocado.module';
import { FornecedorFormComponent } from './../fornecedor/components/fornecedor-form/fornecedor-form.component';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AbastecimentoComponent } from './abastecimento.component';
import { FornecedorModule } from './../fornecedor/fornecedor.module';
import { AbastecimentoRoutingModule } from './abastecimento.routing.module';
import { AbastecimentoService } from './shared/service/abastecimento.service';
import { AbastecimentoFormComponent } from './components/abastecimento-form/abastecimento-form.component';
import { AbastecimentoToolsComponent } from './components/abastecimento-tools/abastecimento-tools.component';
import { AbastecimentoHeaderComponent } from './components/abastecimento-header/abastecimento-header.component';
import { AbastecimentoSearchComponent } from './components/abastecimento-search/abastecimento-search.component';
import { AbastecimentoTableComponent } from './components/abastecimento-table/abastecimento-table.component';
import { AbastecimentoAdminComponent } from './components/abastecimento-admin/abastecimento-admin.component';

import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { DataTableModule } from 'primeng/datatable';
import { TextMaskModule } from 'angular2-text-mask';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { FornecedorService } from '../fornecedor/shared/service/fornecedor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AbastecimentoRoutingModule,
    ReactiveFormsModule,
    FornecedorModule,
    VeiculoAlocadoModule,
    TextMaskModule,

    SliderModule,
    ButtonModule,
    ToolbarModule,
    DropdownModule,
    DataTableModule,
    MultiSelectModule,
    SplitButtonModule,
    CampoInvalidModule
    
  ],
  declarations: [
    AbastecimentoComponent,
    AbastecimentoToolsComponent,
    AbastecimentoHeaderComponent,
    AbastecimentoAdminComponent,
    AbastecimentoTableComponent,
    AbastecimentoSearchComponent,
    AbastecimentoFormComponent,
  ],
  providers: [
    AbastecimentoService, 
    FornecedorFormComponent ,
    FornecedorService,
    ToasterService
  ],
  exports:[
    
  ]
})
export class AbastecimentoModule { }

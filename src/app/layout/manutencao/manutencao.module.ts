import { ToasterService } from './../../toaster-service';
import { VeiculoAlocadoModule } from './../controle-veiculo/veiculo-alocado/veiculo-alocado.module';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { FornecedorModule } from './../fornecedor/fornecedor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { ManutencaoSearchComponent } from './components/manutencao-search/manutencao-search.component';
import { ManutencaoTableComponent } from './components/manutencao-table/manutencao-table.component';
import { ManutencaoHeaderComponent } from './components/manutencao-header/manutencao-header.component';
import { ManutencaoFormComponent } from './components/manutencao-form/manutencao-form.component';
import { ManutencaoAdminComponent } from './components/manutencao-admin/manutencao-admin.component';
import { ClassificacaoModule } from './classificacao/classificacao.module';
import { ManutencaoComponent } from './manutencao.component';
import { ManutencaoRoutingModule } from './manutencao.routing.module';
import { ManutencaoToolsComponent } from './components/manutencao-tools/manutencao-tools.component';

import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { ManutencaoService } from './shared/service/manutencao.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoServicoModule } from '../produto-servico/produto-servico.module';



@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    ManutencaoRoutingModule,

    ProdutoServicoModule,
    VeiculoAlocadoModule,
    CampoInvalidModule,
    ClassificacaoModule,
    FornecedorModule,


    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule,
  ],
  declarations: [
    ManutencaoComponent,
    ManutencaoAdminComponent,
    ManutencaoFormComponent,
    ManutencaoHeaderComponent,
    ManutencaoToolsComponent,
    ManutencaoTableComponent,
    ManutencaoSearchComponent
  ],
  providers:[
    ManutencaoService,
    ToasterService
  ],
  exports: [
    ManutencaoFormComponent
  ]
})
export class ManutencaoModule { }

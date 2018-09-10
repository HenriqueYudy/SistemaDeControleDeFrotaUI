import { NetmapModule } from './netmap/netmap.module';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VeiculoAlocadoService } from './../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { CondutorService } from './../tecnicos/condutor/shared/service/condutor.service';
import { VeiculoRastreadoService } from './shared/service/veiculo-rastreado.service';
import { ServicoRastreamentoFormComponent } from './components/servico-rastreamento-form/servico-rastreamento-form.component';
import { ServicoRastreamentoSearchComponent } from './components/servico-rastreamento-search/servico-rastreamento-search.component';
import { ServicoRastreamentoRoutingModule } from './servico-rastreamento.routing.module';
import { ServicoRastreamentoComponent } from './servico-rastreamento.component';
import { ServicoRastreamentoAdminComponent } from './components/servico-rastreamento-admin/servico-rastreamento-admin.component';
import { ServicoRastreamentoToolsComponent } from './components/servico-rastreamento-tools/servico-rastreamento-tools.component';
import { ServicoRastreamentoHeaderComponent } from './components/servico-rastreamento-header/servico-rastreamento-header.component';
import { ServicoRastreamentoTableComponent } from './components/servico-rastreamento-table/servico-rastreamento-table.component';
import { VeiculoAlocadoModule } from '../controle-veiculo/veiculo-alocado/veiculo-alocado.module';


import { DataTableModule, DataTable } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { CondutorModule } from '../tecnicos/condutor/condutor.module';
import { RastreadorModule } from '../rastreador/rastreador.module';
import { ToasterService } from '../../toaster-service';

@NgModule({
  imports: [
    CommonModule,
    ServicoRastreamentoRoutingModule,
    VeiculoAlocadoModule,
    RastreadorModule, 
    ReactiveFormsModule,
    NetmapModule,
    
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
    ServicoRastreamentoComponent,
    ServicoRastreamentoAdminComponent,
    ServicoRastreamentoToolsComponent,
    ServicoRastreamentoHeaderComponent,
    ServicoRastreamentoSearchComponent,
    ServicoRastreamentoTableComponent,
    ServicoRastreamentoFormComponent
  ],

  providers: [
    VeiculoRastreadoService,
    CondutorService,
    VeiculoAlocadoService,
    ToasterService
  ]
})
export class ServicoRastreamentoModule { }

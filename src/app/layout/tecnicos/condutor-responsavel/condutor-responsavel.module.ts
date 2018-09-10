import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CondutorService } from './../condutor/shared/service/condutor.service';
import { VeiculoAlocadoService } from './../../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { CondutorResponsavelFormComponent } from './components/condutor-responsavel-form/condutor-responsavel-form.component';
import { CondutorResponsavelTableComponent } from './components/condutor-responsavel-table/condutor-responsavel-table.component';
import { CondutorResponsavelSearchComponent } from './components/condutor-responsavel-search/condutor-responsavel-search.component';
import { CondutorResponsavelHeaderComponent } from './components/condutor-responsavel-header/condutor-responsavel-header.component';
import { CondutorResponsavelToolsComponent } from './components/condutor-responsavel-tools/condutor-responsavel-tools.component';
import { CondutorResponsavelAdminComponent } from './components/condutor-responsavel-admin/condutor-responsavel-admin.component';
import { CondutorResponsavelComponent } from './condutor-responsavel.component';
import { CondutorResponsavelRoutingModule } from './condutor-responsavel.routing.module';
import { VeiculoAlocadoModule } from '../../controle-veiculo/veiculo-alocado/veiculo-alocado.module';



import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    CondutorResponsavelRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    
    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule,

    VeiculoAlocadoModule

  ],
  declarations: [
    CondutorResponsavelComponent,
    CondutorResponsavelAdminComponent,
    CondutorResponsavelToolsComponent,
    CondutorResponsavelHeaderComponent,
    CondutorResponsavelSearchComponent,
    CondutorResponsavelTableComponent,
    CondutorResponsavelFormComponent
  ],
  providers: [
    VeiculoAlocadoService,
    CondutorService,
  ]
})
export class CondutorResponsavelModule { }

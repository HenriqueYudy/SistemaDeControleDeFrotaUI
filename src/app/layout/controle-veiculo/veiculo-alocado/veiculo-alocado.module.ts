import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { CondutorModule } from './../../tecnicos/condutor/condutor.module';
import { FrotaModule } from './../../frota/frota.module';
import { VeiculoModule } from './../../veiculo/veiculo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FrotaService } from './../../frota/shared/service/frota.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VeiculoAlocadoFormComponent } from './components/veiculo-alocado-form/veiculo-alocado-form.component';
import { VeiculoAlocadoSearchComponent } from './components/veiculo-alocado-search/veiculo-alocado-search.component';
import { VeiculoAlocadoHeaderComponent } from './components/veiculo-alocado-header/veiculo-alocado-header.component';
import { VeiculoAlocadoRoutingModule } from './veiculo-alocado.routing.module';
import { VeiculoAlocadoComponent } from './veiculo-alocado.component';
import { VeiculoAlocadoAdminComponent } from './components/veiculo-alocado-admin/veiculo-alocado-admin.component';
import { VeiculoAlocadoToolsComponent } from './components/veiculo-alocado-tools/veiculo-alocado-tools.component';
import { VeiculoAlocadoTableComponent } from './components/veiculo-alocado-table/veiculo-alocado-table.component';
import { VeiculoAlocadoService } from './shared/service/veiculo-alocado.service';



import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { VeiculoService } from '../../veiculo/shared/service/veiculo.service';
import { CondutorService } from '../../tecnicos/condutor/shared/service/condutor.service';
import { TecnicosModule } from '../../tecnicos/tecnicos.module';
import { ToasterService } from '../../../toaster-service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VeiculoAlocadoRoutingModule,
    VeiculoModule,
    FrotaModule,
    CondutorModule,
    CampoInvalidModule,


    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule
  ],
  declarations: [
    VeiculoAlocadoComponent,
    VeiculoAlocadoAdminComponent,
    VeiculoAlocadoToolsComponent,
    VeiculoAlocadoHeaderComponent,
    VeiculoAlocadoSearchComponent,
    VeiculoAlocadoTableComponent,
    VeiculoAlocadoFormComponent,
  ],
  providers: [
    VeiculoAlocadoService,
    VeiculoService,
    FrotaService,
    CondutorService,
    ToasterService
    ],
    exports:[
      VeiculoAlocadoFormComponent
    ]
})
export class VeiculoAlocadoModule { }

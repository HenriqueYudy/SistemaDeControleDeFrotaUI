import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { CondutorModule } from './../../tecnicos/condutor/condutor.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmpregoVeiculoFormComponent } from './components/emprego-veiculo-form/emprego-veiculo-form.component';
import { VeiculoAlocadoModule } from './../veiculo-alocado/veiculo-alocado.module';
import { EmpregoVeiculoRoutingModule } from './emprego-veiculo.routing.module';
import { EmpregoVeiculoComponent } from './emprego-veiculo.component';
import { EmpregoVeiculoAdminComponent } from './components/emprego-veiculo-admin/emprego-veiculo-admin.component';
import { EmpregoVeiculoToolsComponent } from './components/emprego-veiculo-tools/emprego-veiculo-tools.component';
import { EmpregoVeiculoHeaderComponent } from './components/emprego-veiculo-header/emprego-veiculo-header.component';
import { EmpregoVeiculoSearchComponent } from './components/emprego-veiculo-search/emprego-veiculo-search.component';
import { EmpregoVeiculoTableComponent } from './components/emprego-veiculo-table/emprego-veiculo-table.component';
import { EmpregoVeiculoService } from './shared/service/emprego-veiculo.service';


import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { ToasterService } from '../../../toaster-service';


@NgModule({
  imports: [
    CommonModule,
    EmpregoVeiculoRoutingModule,
    ReactiveFormsModule,
    CondutorModule,
    VeiculoAlocadoModule,

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
    EmpregoVeiculoComponent,
    EmpregoVeiculoAdminComponent,
    EmpregoVeiculoToolsComponent,
    EmpregoVeiculoHeaderComponent,
    EmpregoVeiculoSearchComponent,
    EmpregoVeiculoTableComponent,
    EmpregoVeiculoFormComponent,
  ],
  providers: [
    EmpregoVeiculoService,
    ToasterService
  ]
})
export class EmpregoVeiculoModule { }

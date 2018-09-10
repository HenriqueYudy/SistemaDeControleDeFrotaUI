import { ToasterService } from './../../toaster-service';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModeloService } from './modelo/shared/service/modelo.service';
import { MarcaModule } from './marca/marca.module';
import { VeiculoComponent } from './veiculo.component';
import { ModeloModule } from './modelo/modelo.module';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { VeiculoSearchComponent } from './components/veiculo-search/veiculo-search.component';
import { VeiculoTableComponent } from './components/veiculo-table/veiculo-table.component';
import { VeiculoHeaderComponent } from './components/veiculo-header/veiculo-header.component';
import { VeiculoToolsComponent } from './components/veiculo-tools/veiculo-tools.component';
import { VeiculoAdminComponent } from './components/veiculo-admin/veiculo-admin.component';
import { veiculoRoutingModule } from './veiculo.routing.module';


import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { VeiculoService } from './shared/service/veiculo.service';

@NgModule({
  imports: [
    CommonModule,
    MarcaModule,
    ModeloModule,
    ReactiveFormsModule,
    veiculoRoutingModule,
    HttpModule,
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
    VeiculoComponent,
    VeiculoAdminComponent,
    VeiculoToolsComponent,
    VeiculoFormComponent,
    VeiculoHeaderComponent,
    VeiculoTableComponent,
    VeiculoSearchComponent
  ],
  providers: [
    VeiculoService,
    ModeloService,
    ToasterService
  ],
  exports:[
    VeiculoFormComponent
  ]
})
export class VeiculoModule { }

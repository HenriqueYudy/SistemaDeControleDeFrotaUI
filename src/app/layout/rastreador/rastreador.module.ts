import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RastreadorComponent } from './rastreador.component';
import { RastreadorHeaderComponent } from './components/rastreador-header/rastreador-header.component';
import { RastreadorSearchComponent } from './components/rastreador-search/rastreador-search.component';
import { RastreadorTableComponent } from './components/rastreador-table/rastreador-table.component';
import { RastreadorFormComponent } from './components/rastreador-form/rastreador-form.component';
import { RastreadorToolsComponent } from './components/rastreador-tools/rastreador-tools.component';
import { RastreadorAdminComponent } from './components/rastreador-admin/rastreador-admin.component';
import { RastreadorRoutingModule } from './rastreador.routing.module';


import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { RastreadorService } from './shared/service/rastreador.service';
import { CoordenadaModule } from './coordenada/coordenada.module';
import { ToasterService } from '../../toaster-service';





@NgModule({
  imports: [
    CommonModule,
    RastreadorRoutingModule,
    CoordenadaModule,
    ReactiveFormsModule,
    HttpModule,
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
    RastreadorComponent,
    RastreadorAdminComponent,
    RastreadorToolsComponent,
    RastreadorHeaderComponent,
    RastreadorSearchComponent,
    RastreadorTableComponent,
    RastreadorFormComponent

  ],
  providers: [
    RastreadorService,
    ToasterService
  ],
  exports:[
    RastreadorFormComponent 
  ]
})
export class RastreadorModule { }

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { CampoInvalidComponent } from './../../../campo-invalid/campo-invalid.component';


import { MarcaComponent } from './marca.component';
import { marcaRoutingModule } from './marca.routing.module';
import { MarcaService } from './shared/service/marca.service';
import { MarcaTableComponent } from './components/marca-table/marca-table.component';
import { MarcaHeaderComponent } from './components/marca-header/marca-header.component';
import { MarcaFormComponent } from './components/marca-form/marca-form.component';
import { MarcaAdminComponent } from './components/marca-admin/marca-admin.component';
import { MarcaToolsComponent } from './components/marca-tools/marca-tools.component';
import { MarcaSearchComponent } from './components/marca-search/marca-search.component';

import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule, SplitButton} from 'primeng/splitbutton';
import {TextMaskModule} from 'angular2-text-mask';
import { ToasterService } from '../../../toaster-service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    marcaRoutingModule,
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
    MarcaComponent,
    MarcaAdminComponent,
    MarcaFormComponent,
    MarcaToolsComponent,
    MarcaSearchComponent,
    MarcaHeaderComponent,
    MarcaTableComponent,
    
  ],  
  
  providers:[
    MarcaService,
    ToasterService,
  ],

  exports:[
    MarcaFormComponent
  ]
})
export class MarcaModule { }

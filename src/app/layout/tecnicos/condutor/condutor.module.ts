import { ToasterService } from './../../../toaster-service';
import { TextMaskModule } from 'angular2-text-mask';
import { CampoInvalidModule } from './../../../campo-invalid/campo-invalid.module';
import { CampoInvalidComponent } from './../../../campo-invalid/campo-invalid.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondutorFormComponent } from './components/condutor-form/condutor-form.component';
import { CondutorTableComponent } from './components/condutor-table/condutor-table.component';
import { CondutorToolsComponent } from './components/condutor-tools/condutor-tools.component';
import { CondutorAdminComponent } from './components/condutor-admin/condutor-admin.component';
import { CondutorComponent } from './condutor.component';
import { CondutorRoutingModule } from './condutor.routing.module';
import { CondutorHeaderComponent } from './components/condutor-header/condutor-header.component';
import { CondutorSearchComponent } from './components/condutor-search/condutor-search.component';
import { CondutorService } from './shared/service/condutor.service';


import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    
    CondutorRoutingModule,
    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    CampoInvalidModule,
    TextMaskModule
  ],
  declarations: [
    CondutorComponent,
    CondutorAdminComponent,
    CondutorToolsComponent,
    CondutorHeaderComponent,
    CondutorSearchComponent,
    CondutorTableComponent,
    CondutorFormComponent

  ],
  exports: [
    CondutorFormComponent
  ],
  providers: [
    CondutorService,
    ToasterService
  ]
})
export class CondutorModule { }

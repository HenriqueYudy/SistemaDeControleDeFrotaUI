import { MarcaService } from './../marca/shared/service/marca.service';
import { ModeloRoutingModule } from './modelo.routing.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModeloSearchComponent } from './components/modelo-search/modelo-search.component';
import { ModeloFormComponent } from './components/modelo-form/modelo-form.component';
import { ModeloTableComponent } from './components/modelo-table/modelo-table.component';
import { ModeloHeaderComponent } from './components/modelo-header/modelo-header.component';
import { ModeloComponent } from './modelo.component';
import { ModeloAdminComponent } from './components/modelo-admin/modelo-admin.component';
import { ModeloToolsComponent } from './components/modelo-tools/modelo-tools.component';
import { ModeloService } from './shared/service/modelo.service';
import { MarcaModule } from '../marca/marca.module';

import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule, SplitButton } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { CampoInvalidModule } from '../../../campo-invalid/campo-invalid.module';
import { ToasterService } from '../../../toaster-service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ModeloRoutingModule,
    MarcaModule,
    CampoInvalidModule,
    TextMaskModule,

    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
  ],
  declarations: [
    ModeloComponent,
    ModeloAdminComponent,
    ModeloToolsComponent,
    ModeloHeaderComponent,
    ModeloTableComponent,
    ModeloFormComponent,
    ModeloSearchComponent
  ],
  providers: [
    ModeloService,
    ToasterService
  ],
  exports: [
    ModeloFormComponent
  ]
})
export class ModeloModule { }

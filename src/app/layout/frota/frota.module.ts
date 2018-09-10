import { ToasterService } from './../../toaster-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FrotaRoutingModule } from './frota.routing.module';
import { EmpresaService } from './empresa/shared/service/empresa.service';
import { FrotaFormComponent } from './components/frota-form/frota-form.component';
import { FrotaTableComponent } from './components/frota-table/frota-table.component';
import { FrotaHeaderComponent } from './components/frota-header/frota-header.component';
import { FrotaToolsComponent } from './components/frota-tools/frota-tools.component';
import { FrotaAdminComponent } from './components/frota-admin/frota-admin.component';
import { EmpresaModule } from './empresa/empresa.module';
import { FrotaComponent } from './frota.component';
import { FrotaSearchComponent } from './components/frota-search/frota-search.component';
import { FrotaService } from './shared/service/frota.service';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';


import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule, SplitButton} from 'primeng/splitbutton';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    FrotaRoutingModule,
    ReactiveFormsModule,
    EmpresaModule,

    
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
    FrotaComponent,
    FrotaAdminComponent,
    FrotaToolsComponent,
    FrotaHeaderComponent,
    FrotaSearchComponent,
    FrotaTableComponent,
    FrotaFormComponent,
    FrotaAdminComponent
  ],
  providers: [
    FrotaService,
    EmpresaService,
    ToasterService
  ],
  exports: [
    FrotaFormComponent
  ]
})
export class FrotaModule { }

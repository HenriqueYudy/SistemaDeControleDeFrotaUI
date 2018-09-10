import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { CoordenadaComponent } from './coordenada.component';
import { CoordenadaSearchComponent } from './components/coordenada-search/coordenada-search.component';
import { CoordenadaHeaderComponent } from './components/coordenada-header/coordenada-header.component';
import { CoordenadaAdminComponent } from './components/coordenada-admin/coordenada-admin.component';
import { CoordenadaToolsComponent } from './components/coordenada-tools/coordenada-tools.component';
import { CoordenadaTableComponent } from './components/coordenada-table/coordenada-table.component';
import { coordenadaRoutingModule } from './coordenada.routing.module';
import { CoordenadaService } from './shared/service/coordenada.service';


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
    coordenadaRoutingModule,
    HttpModule,
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
    CoordenadaComponent,
    CoordenadaAdminComponent,
    CoordenadaToolsComponent,
    CoordenadaHeaderComponent,
    CoordenadaSearchComponent,
    CoordenadaTableComponent
  
  ],
  providers: [CoordenadaService]
})
export class CoordenadaModule { }

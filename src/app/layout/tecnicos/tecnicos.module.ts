import { CondutorResponsavelModule } from './condutor-responsavel/condutor-responsavel.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TecnicosSearchComponent } from './components/tecnicos-search/tecnicos-search.component';
import { TecnicosHeaderComponent } from './components/tecnicos-header/tecnicos-header.component';
import { TecnicosToolsComponent } from './components/tecnicos-tools/tecnicos-tools.component';
import { CondutorModule } from './condutor/condutor.module';
import { TecnicoRoutingModule } from './tecnicos.routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { TecnicosAdminComponent } from './components/tecnicos-admin/tecnicos-admin.component';
import { TecnicosFormComponent } from './components/tecnicos-form/tecnicos-form.component';
import { TecnicosTableComponent } from './components/tecnicos-table/tecnicos-table.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TecnicoRoutingModule,
    CondutorModule,
    CondutorResponsavelModule
  ],
  declarations: [
    TecnicosComponent,
    TecnicosAdminComponent,
    TecnicosToolsComponent,
    TecnicosHeaderComponent,
    TecnicosFormComponent,
    TecnicosSearchComponent,
    TecnicosTableComponent
  ],
  providers:[
  ]
})
export class TecnicosModule { }

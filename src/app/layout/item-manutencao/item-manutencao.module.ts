import { ManutencaoService } from './../manutencao/shared/service/manutencao.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { ItemManutencaoFormComponent } from './components/item-manutencao-form/item-manutencao-form.component';
import { ItemManutencaoRoutingModule } from './item-manutencao.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemManutencaoComponent } from './item-manutencao.component';
import { ItemManutencaoHeaderComponent } from './components/item-manutencao-header/item-manutencao-header.component';
import { ItemManutencaoAdminComponent } from './components/item-manutencao-admin/item-manutencao-admin.component';
import { ItemManutencaoTableComponent } from './components/item-manutencao-table/item-manutencao-table.component';
import { ItemManutencaoSearchComponent } from './components/item-manutencao-search/item-manutencao-search.component';
import { ItemManutencaoToolsComponent } from './components/item-manutencao-tools/item-manutencao-tools.component';
import { ItemManutencaoService } from './shared/services/item-manutencao.service';
import { routerTransition } from '../../router.animation';
import { DataTableModule } from 'primeng/datatable';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CampoInvalidModule } from '../../campo-invalid/campo-invalid.module';
import { ProdutoServicoService } from '../produto-servico/shared/services/produto-servico.service';
import { ManutencaoModule } from '../manutencao/manutencao.module';
import {PickListModule} from 'primeng/picklist';
import { ToasterService } from '../../toaster-service';


@NgModule({
  imports: [
    CommonModule,
    ItemManutencaoRoutingModule,
    ReactiveFormsModule,
    CampoInvalidModule,
    ManutencaoModule,
    

    PickListModule,
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
    ItemManutencaoComponent,
    ItemManutencaoFormComponent,
    ItemManutencaoHeaderComponent,
    ItemManutencaoAdminComponent,
    ItemManutencaoSearchComponent,
    ItemManutencaoToolsComponent,
    ItemManutencaoTableComponent
  ],
  providers: [
    ItemManutencaoService,
    ManutencaoService,
    ProdutoServicoService,
    ToasterService
    
  ]
})
export class ItemManutencaoModule { }

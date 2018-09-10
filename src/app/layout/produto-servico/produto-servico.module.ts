import { ToasterService } from './../../toaster-service';
import { CampoInvalidModule } from './../../campo-invalid/campo-invalid.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProdutoServicoService } from './shared/services/produto-servico.service';
import { ProdutoServico } from './shared/class/produto-servico';
import { ProdutoServicoRoutingModule } from './produto-servico.routing.module';
import { ProdutoServicoAdminComponent } from './components/produto-servico-admin/produto-servico-admin.component';
import { ProdutoServicoToolsComponent } from './components/produto-servico-tools/produto-servico-tools.component';
import { ProdutoServicoHeaderComponent } from './components/produto-servico-header/produto-servico-header.component';
import { ProdutoServicoSearchComponent } from './components/produto-servico-search/produto-servico-search.component';
import { ProdutoServicoTableComponent } from './components/produto-servico-table/produto-servico-table.component';
import { ProdutoServicoFormComponent } from './components/produto-servico-form/produto-servico-form.component';
import { DataTableModule } from 'primeng/datatable';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TextMaskModule } from 'angular2-text-mask';
import { ProdutoServicoComponent } from './produto-servico.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutoServicoRoutingModule,
    CampoInvalidModule,

    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TextMaskModule,
  ],
  declarations: [
    ProdutoServicoComponent,
    ProdutoServicoAdminComponent,
    ProdutoServicoToolsComponent,
    ProdutoServicoHeaderComponent,
    ProdutoServicoSearchComponent,
    ProdutoServicoTableComponent,
    ProdutoServicoFormComponent

  ],
  providers: [
    ProdutoServicoService,
    ToasterService
  ]
})
export class ProdutoServicoModule { }

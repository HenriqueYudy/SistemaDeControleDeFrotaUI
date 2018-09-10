import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ControleVeiculoTableComponent } from './components/controle-veiculo-table/controle-veiculo-table.component';
import { ControleVeiculoHeaderComponent } from './components/controle-veiculo-header/controle-veiculo-header.component';
import { ControleVeiculoAdminComponent } from './components/controle-veiculo-admin/controle-veiculo-admin.component';
import { ControleVeiculoComponent } from './controle-veiculo.component';
import { ControleVeiculoRoutingModule } from './controle-veiculo.routing.module';
import { ControleVeiculoToolsComponent } from './components/controle-veiculo-tools/controle-veiculo-tools.component';
import { ControleVeiculoSearchComponent } from './components/controle-veiculo-search/controle-veiculo-search.component';
import { EmpregoVeiculoModule } from './emprego-veiculo/emprego-veiculo.module';
import { VeiculoAlocadoModule } from './veiculo-alocado/veiculo-alocado.module';

@NgModule({
  imports: [
    CommonModule,
    ControleVeiculoRoutingModule,
    EmpregoVeiculoModule,
    VeiculoAlocadoModule

  ],
  declarations: [
    ControleVeiculoComponent,
    ControleVeiculoAdminComponent,
    ControleVeiculoToolsComponent,
    ControleVeiculoHeaderComponent,
    ControleVeiculoSearchComponent,
    ControleVeiculoTableComponent

  ]
})
export class ControleVeiculoModule { }

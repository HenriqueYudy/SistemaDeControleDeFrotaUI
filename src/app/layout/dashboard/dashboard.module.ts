import { RastreadorService } from './../rastreador/shared/service/rastreador.service';
import { VeiculoAlocadoService } from './../controle-veiculo/veiculo-alocado/shared/service/veiculo-alocado.service';
import { VeiculoService } from './../veiculo/shared/service/veiculo.service';
import { EmpregoVeiculoService } from './../controle-veiculo/emprego-veiculo/shared/service/emprego-veiculo.service';
import { CondutorService } from './../tecnicos/condutor/shared/service/condutor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import {ChartModule} from 'primeng/chart';
import { VeiculoRastreadoService } from '../servico-rastreamento/shared/service/veiculo-rastreado.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers:[
    CondutorService,
    EmpregoVeiculoService,
    VeiculoService,
    VeiculoAlocadoService,
    RastreadorService,
    VeiculoRastreadoService

  ]
})
export class DashboardModule { }

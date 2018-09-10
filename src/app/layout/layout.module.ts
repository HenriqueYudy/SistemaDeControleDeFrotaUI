import { CampoInvalidComponent } from './../campo-invalid/campo-invalid.component';
import { AuthGuard } from './../shared/guard/auth-guard';
import { VeiculoModule } from './veiculo/veiculo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { layoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    layoutRoutingModule,
    DashboardModule,
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
  ],
  exports:[
  ],
  providers:[
    AuthGuard
  ]
})
export class LayoutModule { }

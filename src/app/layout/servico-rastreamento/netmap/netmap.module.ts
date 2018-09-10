import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { NetmapComponent } from './netmap.component';
import { NetMapRoutingModule } from './netmap.routing.module';
import { VeiculoRastreadoService } from '../shared/service/veiculo-rastreado.service';
import { TextMaskModule } from 'angular2-text-mask';
import { ToasterService } from '../../../toaster-service';

@NgModule({
  imports: [
    CommonModule,
    NetMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDW_0Bcxp3EbaP7dhdUAv_7gHKPf0_jNG4'
    }),
    TextMaskModule

  ],
  declarations:
    [
      NetmapComponent
    ],
  providers: [
    VeiculoRastreadoService,
    ToasterService
  ]
})
export class NetmapModule { }

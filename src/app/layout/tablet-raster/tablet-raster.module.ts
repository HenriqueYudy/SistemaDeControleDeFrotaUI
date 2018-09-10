import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletRasterComponent } from './tablet-raster.component';
import { AgmCoreModule } from '@agm/core';
import { TabletService } from './shared/service/tablet.service';
import { ToasterService } from '../../toaster-service';
import { TabletRasterRoutingModule } from './tablet-raster.routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { DataTableModule } from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDW_0Bcxp3EbaP7dhdUAv_7gHKPf0_jNG4'
    }),
    TabletRasterRoutingModule,
    TextMaskModule,
    DataTableModule
  ],
  declarations: [
    TabletRasterComponent
  ],
  providers: [
    TabletService,
    ToasterService
  ]
})
export class TabletRasterModule { }

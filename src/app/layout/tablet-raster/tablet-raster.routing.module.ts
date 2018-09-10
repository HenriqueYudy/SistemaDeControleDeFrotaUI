import { Routes } from '@angular/router/src/config';
import { TabletRasterComponent } from './tablet-raster.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



const tabletRoutes: Routes = [
    { path: '', component: TabletRasterComponent }
]

@NgModule({
    imports: [RouterModule.forChild(tabletRoutes)],
    exports: [RouterModule]
})

export class TabletRasterRoutingModule {

}
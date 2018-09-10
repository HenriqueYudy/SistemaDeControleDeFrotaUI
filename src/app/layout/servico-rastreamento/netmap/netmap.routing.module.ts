import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NetmapComponent } from './netmap.component';


const netMapRoutes: Routes = [
    { path: '', component: NetmapComponent }
];

@NgModule({
    imports: [RouterModule.forChild(netMapRoutes)],
    exports: [RouterModule]
})

export class NetMapRoutingModule {

}
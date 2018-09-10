import { CoordenadaComponent } from './coordenada.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";


const coordenadaRoutes: Routes = [
    { path: 'coordenadas', component: CoordenadaComponent }
]



@NgModule({
    imports: [RouterModule.forChild(coordenadaRoutes)],
    exports: [RouterModule]
})


export class coordenadaRoutingModule {

}
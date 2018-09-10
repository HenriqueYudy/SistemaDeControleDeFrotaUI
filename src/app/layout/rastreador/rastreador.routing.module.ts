import { RastreadorFormComponent } from './components/rastreador-form/rastreador-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { RastreadorComponent } from "./rastreador.component";
import { CoordenadaComponent } from './coordenada/coordenada.component';

const rastreadorRoutes: Routes = [
    { path: '', component: RastreadorComponent },
    { path: 'form', component: RastreadorFormComponent },
    { path: 'edit/:id', component: RastreadorFormComponent },   
    { path: 'coordenadas', component: CoordenadaComponent },

]



@NgModule({
    imports: [RouterModule.forChild(rastreadorRoutes)],
    exports: [RouterModule]

})


export class RastreadorRoutingModule {

}
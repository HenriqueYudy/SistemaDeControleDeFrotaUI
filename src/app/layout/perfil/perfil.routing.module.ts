import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { NgModule } from '@angular/core';


const perfilRoutes: Routes = [
    { path: '', component: PerfilComponent },
]

@NgModule({
    imports: [RouterModule.forChild(perfilRoutes)],
    exports: [RouterModule]
})


export class PerfilRoutingModule {

}
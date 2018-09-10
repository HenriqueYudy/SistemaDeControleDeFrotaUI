import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrarComponent } from './registrar.component';
import { Routes } from '@angular/router';


const registrarRoutes: Routes = [
    { path: '', component: RegistrarComponent}
]



@NgModule({
    imports: [RouterModule.forChild(registrarRoutes)],
    exports: [RouterModule]
})

export class registrarRoutingModule {
    
}
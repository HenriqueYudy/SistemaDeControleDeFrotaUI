import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { AbastecimentoFormComponent } from './components/abastecimento-form/abastecimento-form.component';
import { AbastecimentoComponent } from './abastecimento.component';



const abastecimentoRoutes: Routes = [
    { path: '', component: AbastecimentoComponent},
    { path: 'form', component: AbastecimentoFormComponent},
    { path: 'edit/:id', component: AbastecimentoFormComponent}
]

@NgModule({

    imports: [RouterModule.forChild(abastecimentoRoutes)],
    exports: [RouterModule]
})

export class AbastecimentoRoutingModule {

}
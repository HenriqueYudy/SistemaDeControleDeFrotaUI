import { NgModule } from '@angular/core';
import { Routes, RouterModule   } from "@angular/router";

import { ManutencaoComponent } from './manutencao.component';
import { ManutencaoFormComponent } from './components/manutencao-form/manutencao-form.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';
import { ClassificacaoFormComponent } from './classificacao/components/classificacao-form/classificacao-form.component';





const manutencaoRoutes: Routes = [
    { path: '', component: ManutencaoComponent },
    { path: 'form', component: ManutencaoFormComponent },
    { path: 'edit/:id' , component: ManutencaoFormComponent},
    { path: 'classificacao', component: ClassificacaoComponent },
    { path: 'classificacao/form', component: ClassificacaoFormComponent },
    { path: 'classificacao/edit/:id' , component: ClassificacaoFormComponent},
    
]

@NgModule({
    imports: [RouterModule.forChild(manutencaoRoutes)],
    exports: [RouterModule]
})
export class ManutencaoRoutingModule {

}
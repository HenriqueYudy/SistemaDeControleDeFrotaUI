import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClassificacaoComponent } from './classificacao.component';




const classificacaoRoutes: Routes = [
    {path: 'classificacao', component: ClassificacaoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(classificacaoRoutes)],
    exports: [RouterModule]
})

export class ClassificacaoRoutingModule {

}
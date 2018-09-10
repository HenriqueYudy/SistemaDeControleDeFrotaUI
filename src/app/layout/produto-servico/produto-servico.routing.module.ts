import { NgModule } from '@angular/core';
import { Routes, RouterModule   } from "@angular/router";
import { ProdutoServicoFormComponent } from './components/produto-servico-form/produto-servico-form.component';
import { ProdutoServicoComponent } from './produto-servico.component';




const produtoServicoRoutes: Routes = [
    {path: '' , component: ProdutoServicoComponent},
    {path: 'form', component: ProdutoServicoFormComponent},
    {path: 'edit/:id', component: ProdutoServicoFormComponent}

]

@NgModule({
    imports: [RouterModule.forChild(produtoServicoRoutes)],
    exports: [RouterModule]
})
export class ProdutoServicoRoutingModule {

}
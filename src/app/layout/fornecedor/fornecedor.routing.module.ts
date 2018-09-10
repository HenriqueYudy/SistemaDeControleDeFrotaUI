import { FornecedorFormComponent } from './components/fornecedor-form/fornecedor-form.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FornecedorComponent } from './fornecedor.component';



const fornecedorRoutes: Routes = [
    { path: '', component: FornecedorComponent },
    { path: 'form', component: FornecedorFormComponent },
    { path: 'edit/:id', component: FornecedorFormComponent }
]

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})

export class FornecedorRoutingModule {

}
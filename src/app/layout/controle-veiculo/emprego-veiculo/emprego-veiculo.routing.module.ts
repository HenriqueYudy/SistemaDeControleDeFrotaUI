import { EmpregoVeiculoFormComponent } from './components/emprego-veiculo-form/emprego-veiculo-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpregoVeiculoComponent } from './emprego-veiculo.component';
import { Routes } from '@angular/router';


const empregoVeiculoRoutes: Routes = [
    { path: '', component: EmpregoVeiculoComponent },
    { path: 'form', component: EmpregoVeiculoFormComponent}
]

@NgModule({
    imports: [RouterModule.forChild(empregoVeiculoRoutes)],
    exports: [RouterModule]
})

export class EmpregoVeiculoRoutingModule {

}
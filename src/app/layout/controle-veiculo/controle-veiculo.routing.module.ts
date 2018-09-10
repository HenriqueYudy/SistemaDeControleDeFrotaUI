import { EmpregoVeiculoFormComponent } from './emprego-veiculo/components/emprego-veiculo-form/emprego-veiculo-form.component';
import { VeiculoAlocadoFormComponent } from './veiculo-alocado/components/veiculo-alocado-form/veiculo-alocado-form.component';
import { EmpregoVeiculoComponent } from './emprego-veiculo/emprego-veiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ControleVeiculoComponent } from "./controle-veiculo.component";
import { VeiculoAlocadoComponent } from './veiculo-alocado/veiculo-alocado.component';


const controleVeiculoRoutes: Routes = [
    { path: '', component: ControleVeiculoComponent },
    { path: 'empregoVeiculo', component: EmpregoVeiculoComponent},
    { path: 'empregoVeiculo/form', component: EmpregoVeiculoFormComponent},
    { path: 'empregoVeiculo/edit/:id', component: EmpregoVeiculoFormComponent},
    { path: 'veiculoAlocado', component: VeiculoAlocadoComponent},
    { path: 'veiculoAlocado/edit/:id', component: VeiculoAlocadoFormComponent},
    { path: 'veiculoAlocado/form', component: VeiculoAlocadoFormComponent}
    
]

@NgModule({
    imports: [RouterModule.forChild(controleVeiculoRoutes)],
    exports: [RouterModule]
})


export class ControleVeiculoRoutingModule {

}
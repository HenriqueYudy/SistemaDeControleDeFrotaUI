import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModeloFormComponent } from './modelo/components/modelo-form/modelo-form.component';
import { ModeloComponent } from './modelo/modelo.component';
import { MarcaFormComponent } from './marca/components/marca-form/marca-form.component';
import { VeiculoComponent } from './veiculo.component';
import { MarcaComponent } from './marca/marca.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';

const veiculoRoutes: Routes = [
    { path: '' , component: VeiculoComponent},
    { path: 'form', component: VeiculoFormComponent},
    { path: 'edit/:id', component: VeiculoFormComponent},
    { path: 'marca', component: MarcaComponent},
    { path: 'marca/form', component: MarcaFormComponent},
    { path: 'marca/edit/:id', component:  MarcaFormComponent},
    { path: 'modelo', component: ModeloComponent},
    { path: 'modelo/form', component: ModeloFormComponent},
    { path: 'modelo/edit/:id' , component: ModeloFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(veiculoRoutes)],
    exports: [RouterModule]
})
export class veiculoRoutingModule {
}

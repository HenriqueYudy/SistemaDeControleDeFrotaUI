import { ModeloFormComponent } from './components/modelo-form/modelo-form.component';
import { ModeloComponent } from './modelo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const modeloRoutes: Routes = [
    {path: 'modelo', component: ModeloComponent},
    {path: 'modelo/edit/:id', component: ModeloFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(modeloRoutes)],
    exports: [RouterModule]
})
export class ModeloRoutingModule {
}

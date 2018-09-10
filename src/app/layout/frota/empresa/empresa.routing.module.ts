import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa.component';



const empresaRoutes: Routes = [
    { path: '' , component: EmpresaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(empresaRoutes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule {
}

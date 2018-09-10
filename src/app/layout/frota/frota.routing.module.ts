import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaFormComponent } from './empresa/components/empresa-form/empresa-form.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FrotaComponent } from './frota.component';
import { FrotaFormComponent } from './components/frota-form/frota-form.component';



const frotaRoutes: Routes = [
    { path: '' , component: FrotaComponent},
    { path: 'form', component: FrotaFormComponent},
    { path: 'edit/:id', component: FrotaFormComponent},
    { path: 'empresa', component: EmpresaComponent},
    { path: 'empresa/form', component: EmpresaFormComponent},
    { path: 'empresa/edit/:id', component: EmpresaFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(frotaRoutes)],
    exports: [RouterModule]
})
export class FrotaRoutingModule {
}

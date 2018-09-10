import { CondutorResponsavelFormComponent } from './condutor-responsavel/components/condutor-responsavel-form/condutor-responsavel-form.component';
import { CondutorResponsavelComponent } from './condutor-responsavel/condutor-responsavel.component';
import { TecnicosFormComponent } from './components/tecnicos-form/tecnicos-form.component';
import { CondutorFormComponent } from './condutor/components/condutor-form/condutor-form.component';
import { CondutorComponent } from './condutor/condutor.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnicosComponent } from './tecnicos.component';

const tecnicoRoutes: Routes = [
    { path: '', component: TecnicosComponent },
    { path: 'condutor', component: CondutorComponent },
    { path: 'condutor/form', component: CondutorFormComponent},
    { path: 'condutor/edit/:id' , component: CondutorFormComponent},
    { path: 'condutorResponsavel' , component: CondutorResponsavelComponent},
    { path: 'condutorResponsavel/edit/:id', component: CondutorResponsavelFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(tecnicoRoutes)],
    exports: [RouterModule]
})
export class TecnicoRoutingModule {
}

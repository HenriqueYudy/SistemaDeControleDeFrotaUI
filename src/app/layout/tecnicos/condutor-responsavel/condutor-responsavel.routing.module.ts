import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondutorResponsavelComponent } from './condutor-responsavel.component';


const condutorResponsavelRoutes: Routes = [
    {path: '', component: CondutorResponsavelComponent}
]


@NgModule({
    imports: [RouterModule.forChild(condutorResponsavelRoutes)],
    exports: [RouterModule]
})

export class CondutorResponsavelRoutingModule {

}
import { CondutorComponent } from './condutor.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const condutorRoutes: Routes = [
    { path: 'condutor' , component: CondutorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(condutorRoutes)],
    exports: [RouterModule]
})
export class CondutorRoutingModule {
}

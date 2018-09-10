import { NgModule } from '@angular/core'; 
import { MarcaComponent } from './marca.component';
import { Routes, RouterModule } from '@angular/router';

const marcaRoutes: Routes = [
    {
        path: 'marca', component: MarcaComponent, children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(marcaRoutes)],
    exports: [RouterModule]
})
export class marcaRoutingModule {
}

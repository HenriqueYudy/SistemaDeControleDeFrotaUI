import { Routes, RouterModule } from "@angular/router";
import { VeiculoAlocadoComponent } from "./veiculo-alocado.component";
import { NgModule } from "@angular/core";


const veiculoAlocadoRoutes: Routes = [
    { path: 'veiculoAlocado', component: VeiculoAlocadoComponent }
]


@NgModule({
    imports: [RouterModule.forChild(veiculoAlocadoRoutes)],
    exports: [RouterModule]
})

export class VeiculoAlocadoRoutingModule {

}
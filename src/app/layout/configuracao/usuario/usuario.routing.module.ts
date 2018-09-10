import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from "@angular/router/src/config";
import { UsuarioComponent } from "./usuario.component";
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';




const usuarioRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent }
]

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})

export class usuarioRoutingModule {

}
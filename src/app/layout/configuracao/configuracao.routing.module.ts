import { PermissaoFormComponent } from './permissao/components/permissao-form/permissao-form.component';
import { PermissaoComponent } from './permissao/permissao.component';
import { UsuarioFormComponent } from './usuario/components/usuario-form/usuario-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ConfiguracaoComponent } from "./configuracao.component";




const configuracaoRoutes: Routes = [
    { path: '', component: ConfiguracaoComponent },
    { path: 'usuario', component: UsuarioComponent},
    { path: 'usuario/edit/:id', component: UsuarioFormComponent},
    { path: 'usuario/form', component: UsuarioFormComponent},
    { path: 'permissoes', component: PermissaoComponent},
    { path: 'permissoes/form', component: PermissaoFormComponent},
    { path: 'permissoes/edit/:id' , component: PermissaoFormComponent}
]


@NgModule({
    imports: [RouterModule.forChild(configuracaoRoutes)],
    exports: [RouterModule]
})


export class ConfiguracaoRoutingModule {

}
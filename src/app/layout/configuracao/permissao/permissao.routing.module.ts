import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissaoComponent } from './permissao.component';


const permissaoRoutes: Routes = [
    {path: 'permissoes', component: PermissaoComponent}
]

@NgModule({
    
    imports: [RouterModule.forChild(permissaoRoutes)],
    exports: [RouterModule]

})


export class PermissaoRoutingModule{

}
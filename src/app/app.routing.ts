import { RegistrarComponent } from './registrar/registrar.component';
import { AuthGuard } from './shared/guard/auth-guard';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


const APP_ROUTES: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule'    },
    { path: 'register', component: RegistrarComponent},
    { path: 'layout', component: LayoutComponent , canActivate: [AuthGuard]},
    { path: 'paginaNaoAutorizada', component: UnauthorizedPageComponent},
    { path: 'home', component: HomeComponent},
    { path: '**',component: NotFoundComponent},
   

    ]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
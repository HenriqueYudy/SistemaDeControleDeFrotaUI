import { TokenStorage } from './shared/token/tokenStorage';
import { HttpInterceptor, HttpClientModule, HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';
import { AuthGuard } from './shared/guard/auth-guard';
import { RegistrarModule } from './registrar/registrar.module';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampoInvalidComponent } from './campo-invalid/campo-invalid.component';
import { Interceptor } from './interceptor';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
    LoginModule,
    RegistrarModule,
    BrowserAnimationsModule,
    Ng2DragDropModule,
    HttpClientModule
  

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UnauthorizedPageComponent,
  
  ],

  providers: [
    AuthService,
    AuthGuard,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }



  ],

  exports: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

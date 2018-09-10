import { ToasterService } from './../toaster-service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login.routing.module'; 
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  imports: [
    CommonModule,
    loginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    ToasterService
  ],
})
export class LoginModule { }

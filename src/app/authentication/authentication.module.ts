import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from './auth.service';
import { SpinnerComponent } from './container/spinner/spinner.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers:[
    AuthService
  ]
})
export class AuthenticationModule { }

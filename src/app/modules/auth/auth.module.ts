import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneLoginFormComponent } from './components/phone-login-form/phone-login-form.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    PhoneLoginFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    PhoneLoginFormComponent
  ]
})
export class AuthModule { }

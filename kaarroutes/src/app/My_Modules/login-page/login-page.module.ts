import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddFormComponent } from './components/add-form/add-form.component';


@NgModule({
  declarations: [ListUserComponent, AddFormComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule
  ]
})
export class LoginPageModule { }

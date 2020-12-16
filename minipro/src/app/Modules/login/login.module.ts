import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LeftdivComponent } from './components/leftdiv/leftdiv.component';
import { AdduserComponent } from './components/adduser/adduser.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginpageComponent, LeftdivComponent, AdduserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }

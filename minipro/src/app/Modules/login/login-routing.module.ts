import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LeftdivComponent } from './components/leftdiv/leftdiv.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

const routes: Routes = [
  {
    path : '',
    component : LeftdivComponent,
    children : [
      {
        path : '',
        component : LoginpageComponent
      },
      {
        path : 'adduser',
        component : AdduserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

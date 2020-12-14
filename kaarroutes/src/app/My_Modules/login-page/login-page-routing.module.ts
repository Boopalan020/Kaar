import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {
    path : '',
    component : ListUserComponent,
    children : [
      {
        path : 'showdetail',
        loadChildren : () => {
          return import('../user-detail/user-detail.module')
          .then(m => m.UserDetailModule)
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }

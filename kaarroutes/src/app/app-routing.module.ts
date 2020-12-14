import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home_page',
    pathMatch : 'full'
  },
  {
    path : 'home_page',
    loadChildren : () =>
      import('./My_Modules/home-page/home-page.module')
      .then( m => m.HomePageModule)
  },
  {
    path : 'login_page',
    loadChildren : () =>
      import('./My_Modules/login-page/login-page.module')
      .then( m => m.LoginPageModule)
  },
  {
    path : 'communicate',
    loadChildren : () => 
      import('./My_Modules/communicate/communicate.module')
      .then( m => m.CommunicateModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

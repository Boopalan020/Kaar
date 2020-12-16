import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  // First page of the application is login
  {
    path : 'login',
    loadChildren : () =>
      import('./Modules/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path : 'landingpage',
    loadChildren : () => 
      import('./Modules/landingpage/landingpage.module')
      .then(m => m.LandingpageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

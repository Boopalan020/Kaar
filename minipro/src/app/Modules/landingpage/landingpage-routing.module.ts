import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MenubarComponent } from './components/menubar/menubar.component';

const routes: Routes = [
  {
    path : '',
    component : LandingComponent,
    children : [
      {
        path : '',
        loadChildren : () => 
          import('../zoom/zoom.module')
          .then(m => m.ZoomModule)
      },
      {
        path : 'flipkart',
        loadChildren : () => 
          import('../flipkart/flipkart.module')
          .then(m => m.FlipkartModule)
      },
      {
        path : 'users',
        loadChildren : () => 
          import('../users/users.module')
          .then(m => m.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }

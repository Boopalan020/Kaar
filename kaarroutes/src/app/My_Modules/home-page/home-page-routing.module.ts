import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Section1Component } from './components/section1/section1.component';

const routes: Routes = [
  {
    path : '',
    component : Section1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

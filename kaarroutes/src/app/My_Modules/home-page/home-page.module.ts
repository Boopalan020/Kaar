import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { Section1Component } from './components/section1/section1.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [Section1Component],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule
  ]
})
export class HomePageModule { }

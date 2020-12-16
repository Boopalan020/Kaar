import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
  declarations: [LandingComponent, MenubarComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }

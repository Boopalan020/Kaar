import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipkartRoutingModule } from './flipkart-routing.module';
import { PagesComponent } from './components/pages/pages.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AngmatuiModule } from '../angmatui/angmatui.module'
import { SharecomponentsModule } from '../sharecomponents/sharecomponents.module';
import { FlipfooterComponent } from './components/flipfooter/flipfooter.component'

@NgModule({
  declarations: [PagesComponent, NavbarComponent, FlipfooterComponent],
  imports: [
    CommonModule,
    FlipkartRoutingModule,
    AngmatuiModule,
    SharecomponentsModule
  ]
})
export class FlipkartModule { }

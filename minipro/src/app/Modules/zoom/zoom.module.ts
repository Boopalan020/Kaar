import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomRoutingModule } from './zoom-routing.module';
import { ZoomheaderComponent } from './components/zoomheader/zoomheader.component';
import { ZoombodyComponent } from './components/zoombody/zoombody.component';
import { ZoomfooterComponent } from './components/zoomfooter/zoomfooter.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [ZoomheaderComponent, ZoombodyComponent, ZoomfooterComponent, PageComponent],
  imports: [
    CommonModule,
    ZoomRoutingModule
  ]
})
export class ZoomModule { }

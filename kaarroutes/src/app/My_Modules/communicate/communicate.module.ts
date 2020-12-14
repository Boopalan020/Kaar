import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicateRoutingModule } from './communicate-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    CommunicateRoutingModule
  ]
})
export class CommunicateModule { }

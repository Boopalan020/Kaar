import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DisplayComponent } from './components/display/display.component';
import { FormsComponent } from './components/forms/forms.component';

import { AngmatuiModule } from '../angmatui/angmatui.module'

@NgModule({
  declarations: [DisplayComponent, FormsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngmatuiModule
  ]
})
export class UsersModule { }

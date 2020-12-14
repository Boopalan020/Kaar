import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';


@NgModule({
  declarations: [ShowDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule
  ]
})
export class UserDetailModule { }

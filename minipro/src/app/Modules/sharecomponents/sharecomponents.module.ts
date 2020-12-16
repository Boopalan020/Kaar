import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcardComponent } from './components/shoppingcard/shoppingcard.component';

import { AngmatuiModule } from '../angmatui/angmatui.module';

@NgModule({
  declarations: [ShoppingcardComponent],
  imports: [
    CommonModule,
    AngmatuiModule
  ],
  exports : [
    ShoppingcardComponent
  ]
})
export class SharecomponentsModule { }

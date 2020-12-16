import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'

const UIMaterials : any = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule
]

@NgModule({
  imports: [
    UIMaterials
  ],
  exports : [
    UIMaterials
  ]
})
export class AngmatuiModule { }

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css']
})
export class ShoppingcardComponent implements OnInit {

  @Input()
  shoppingdata:any;

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../../../../services/flipkart/flipkart.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  shopdata : any;

  constructor(
    private _FlipkartService : FlipkartService
  ) { }

  ngOnInit(): void {
    this.shopdata = this._FlipkartService.getProduct()
  }

}

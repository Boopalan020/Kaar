import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  shopdata = 
  [
    {
      product_name : 'Headphone',
      description : "gvaas Rose Red Metal 3.5mm Stereo Audio Y Splitter Cable",
      price : "20",
      rating : "4",
      discount : "10%"
    },
    {
      product_name : 'shoes',
      description : "gvaas Rose Red Metal 3.5mm Stereo Audio Y Splitter Cable",
      price : "300",
      rating : "4.5",
      discount : "20%"
    },
    {
      product_name : 'Bags',
      description : "gvaas Rose Red Metal 3.5mm Stereo Audio Y Splitter Cable",
      price : "200",
      rating : "3.9",
      discount : "15%"
    }
  ]

  constructor() { }

  getProduct()
  {
    return this.shopdata
  }
}

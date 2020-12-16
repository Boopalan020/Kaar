import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(
    private _Router : Router
  ) { }

  ngOnInit(): void {
  }

  public gotoZoom() {
    this._Router.navigateByUrl('landingpage')
  }

  public gotofacebook(){
    this._Router.navigateByUrl('landingpage/flipkart')
  }

  public gotoUSers(){
    this._Router.navigateByUrl('landingpage/users')
  }

  public gotoHome(){
    this._Router.navigateByUrl('login')
  }
}

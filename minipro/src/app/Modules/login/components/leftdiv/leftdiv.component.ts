import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftdiv',
  templateUrl: './leftdiv.component.html',
  styleUrls: ['./leftdiv.component.css']
})
export class LeftdivComponent implements OnInit {

  constructor(private _Router : Router) { }

  ngOnInit(): void {
  }

  public gotoLogin()
  {
    this._Router.navigateByUrl('login')
  }

  public gotoRegister()
  {
    this._Router.navigateByUrl('login/adduser')
  }

}

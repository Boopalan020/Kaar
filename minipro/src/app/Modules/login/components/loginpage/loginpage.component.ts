import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginpageService } from '../../../../services/login/loginpage.service'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  name = ''
  password = ''
  isError : boolean = false
  
  constructor(
    private _LoginPageService : LoginpageService,
    private _Router : Router
  ) { }

  ngOnInit(): void {
  }

  public printToConsole(names : any, psw : any) {
   if(this._LoginPageService.AuthenticateUser(names, psw))
   {
    this.isError = false
    this._Router.navigateByUrl('landingpage')
   }
   else
    this.isError = true
  }
}

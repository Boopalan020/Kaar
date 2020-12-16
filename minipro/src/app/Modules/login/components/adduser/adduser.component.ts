import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Router } from '@angular/router'

// Services
import { LoginpageService } from '../../../../services/login/loginpage.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  name = ""
  password = ""
  constructor(
    private _LoginPageService : LoginpageService,
    private _Router : Router
  ) { }

  ngOnInit(): void {
  }

  createAccount(name : any, psw : any){
    if(this._LoginPageService.AddUSer(name, psw))
    {
      this._Router.navigateByUrl('login')
    }
  }

}

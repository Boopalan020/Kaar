import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginpageService {

  userjson = [
    {
      user : "kaartraining",
      psw : "kaartraining"
    },
    {
      user : "angulartest",
      psw : "angulartest"
    }
  ]

  constructor() { }

  AuthenticateUser(user : any, psw : any){
    console.log(user + "  " + psw)
    for (let i = 0; i < this.userjson.length; i++) {
      const element = this.userjson[i];
      
      if(user === element.user && psw === element.psw)
      {
        console.log("User Matched")
        return true
      }
    }
    return false
  }

  AddUSer(user : any, psw : any){
    this.userjson.push({
      user : user,
      psw : psw
    })
    // console.log(this.userjson)
    return true
  }

}

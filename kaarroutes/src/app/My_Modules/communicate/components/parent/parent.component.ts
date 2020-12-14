import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentdata = "I am a Parent  "
  datatochild = ''
  datafromchild = ''

  isReceived : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  public sendtochild()
  {
    this.datatochild += this.parentdata 
  }

  public receiveData(event : string)
  {
    this.isReceived = true
    this.datafromchild += event
  }
}

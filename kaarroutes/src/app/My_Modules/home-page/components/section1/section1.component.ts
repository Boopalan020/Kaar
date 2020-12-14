import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  homecontent = 'Text Repeater'
  texts = ''
  constructor() { }

  ngOnInit(): void {
  }

  public clearFunc()
  {
    this.texts = ''
  }

}

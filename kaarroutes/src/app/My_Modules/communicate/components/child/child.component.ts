import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  datafromparent : string = '';

  childData = "I am a child  ";

  @Output()
  receive = new EventEmitter()

  public sendtoparent()
  {
    this.receive.emit(this.childData)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

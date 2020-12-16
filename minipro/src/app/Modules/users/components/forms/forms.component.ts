import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Output()
  loaddata = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public loadformdata(id : string, name : string, role : string, joining : any)
  {
    console.log(id,name,role,joining)
    let jsondata = 
    {
      id : id,
      name : name,
      Role : role,
      Joining : joining
    }
    this.loaddata.emit(jsondata)
  }

}

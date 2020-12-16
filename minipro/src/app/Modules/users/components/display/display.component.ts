import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  empData = [
    {
      id : "2342f",
      name : "Boopalan",
      Role : "trainee",
      Joining : "07-12-2020",
    },
    {
      id : "2er342f",
      name : "Hari prasath",
      Role : "trainee",
      Joining : "07-12-2020",
    },
    {
      id : "2er342f",
      name : "Hari prasath",
      Role : "trainee",
      Joining : "07-12-2020",
    },
    {
      id : "2er342f",
      name : "Hari prasath",
      Role : "trainee",
      Joining : "07-12-2020",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public pushdata(data : any)
  {
    console.log(data)
    this.empData.push(data)
  }

}

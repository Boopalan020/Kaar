import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users = [
    {
      id : 'fgadga',
      name : 'Boopalan'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

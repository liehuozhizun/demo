import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public toDoItem:string = "";
  constructor() { }

  public ongoing:string[] = [];
  public done:string[] = [];

  ngOnInit(): void {
  }

  public add(event:KeyboardEvent):void {
    if (event.code == "Enter" && this.toDoItem != "") {
      this.ongoing.push(this.toDoItem);
      this.toDoItem = "";
    }
  }

  public remove(idx:number, item:string) {
    this.ongoing.splice(idx, 1);
    this.done.push(item);
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string='HEADER PROMPT';
  msg : number = 11;

  student : object = {
    name: "string",
    age : 1
  };

  student2 = new Student("yuan", 18);
  innerHTMLContent = "<h2>inner html content</h2>"

  constructor() { }

  ngOnInit(): void {
    
  }

  public arr : number[] = [111, 222, 333];
  public students : Student[] = [
    new Student("std-1", 10),
    new Student("std-2", 15),
    new Student("std-3", 18)
  ];

}

class Student {
  name: string;
  age : number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
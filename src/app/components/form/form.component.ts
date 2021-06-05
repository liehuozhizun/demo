import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public cities = ["SC", "SJ","SF"];
  
  public userInfo:any={
    name:'',
    gender:'',
    city:"",
    hobbies : [
      {title: "eat", checked: false},
      {title: "sleep", checked: false},
      {title: "coding", checked: false}
    ],
    remarks:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(): void {
    
  }

}

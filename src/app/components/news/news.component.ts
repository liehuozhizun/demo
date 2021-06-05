import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public imgUrl = "https://ucsc-caa-dev.s3-us-west-1.amazonaws.com/logo.png";

  public flag = true;

  public today = new Date();
  public keywords:string = '默认值';

  constructor() { }

  ngOnInit(): void {
  }

  run():void {
    console.log("hhh");
  }

  keyDown(e:KeyboardEvent) {
    console.log(e.code);
    
  }
  keyUp(e:any) {
    if (e.code == "Enter")
      console.log("EXECUTE: " + e.target.value)
  }
}

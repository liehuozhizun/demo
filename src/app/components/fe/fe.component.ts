import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-fe',
  templateUrl: './fe.component.html',
  styleUrls: ['./fe.component.scss']
})
export class FeComponent implements OnInit {

  public list: any[] = [];

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  public getData() {
    alert("getting....");
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list = response.result;
    });
  }

  httpOptions:object = {
    headers: new HttpHeaders({
      "authorization":"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjE2NDU2MzMsImV4cCI6MTY1MzE4MTYzMywidWlkIjoxLCJpc0FkbWluIjp0cnVlfQ.D_is1plaKoaUF65PpOv9KRtuv7tU8DvO36QRNppywpI"})
  };
  public test():void {
    let url : string = 'http://ec2-13-57-229-60.us-west-1.compute.amazonaws.com:8080/member/1'
    this.http.get(url, this.httpOptions).subscribe((response: any)=>{
      console.log(response);
    })
  }

  public resp: GeneralResponse = new GeneralResponse();
  public postData() {
    let url : string = 'http://ec2-13-57-229-60.us-west-1.compute.amazonaws.com:8080/authenticate?email=test.user@ucsc.edu&password=PMvAqjINjKFssTwY%2B70waA=='
    this.http.post(url, this.httpOptions).subscribe((response: any)=>{
      console.log(response);
      if (response instanceof GeneralResponse)
        if (response.code != null && response.code == 200) {
          console.log("success");
          this.resp = response;
        }
    })
  }

  public testString:string | null = "";
  

}

class GeneralResponse {
  code?: number;
  message?: string;
  payload?: LoginResponse;
  constructor(){}
}

class LoginResponse {
  token?: string;
  basicInfo?: BasicInfo;
  constructor(){}
}

class BasicInfo {
  email?:string;
  emailVerified?:boolean;
  memberId?: number;
  name?: string;
  status?: Status;
  uid?: number;
  constructor(){}
}

enum Status {
  ACTIVE,
  PENDING,
  DEACTIVE
}
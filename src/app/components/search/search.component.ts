import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public cache:CacheService) { }

  ngOnInit(): void {
  }

  public keyword = "";
  public history : string[] = [];
  public search():void {
    if (this.keyword == "") return;
    console.log(this.keyword);
    if (this.history.indexOf(this.keyword) == -1)
      this.history.push(this.keyword);
    this.keyword="";
  }
  public removeKeyword(idx:number):void {
    this.history.splice(idx,1);
  }
}

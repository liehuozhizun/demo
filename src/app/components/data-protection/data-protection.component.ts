import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor() { }

  inputPlainString:string | null = "";
  outputCipherString:string | null = "";

  inputCipherString:string | null = "";
  outputPlainString:string | null = "";

  ngOnInit(): void {
  }

  public encryptString(e:any): void {
    if (e.code == "Enter") {
      this.outputCipherString = this._encryptString(this.inputPlainString);
    }
  }

  public decryptString(e:any): void {
    if (e.code == "Enter") {
      this.outputPlainString = this._decryptString(this.inputCipherString);
    }
  }

  private secret:string = "***";
  private _encryptString(plain:string | null): string | null {
    if (plain == null && plain == "") return null;
    console.log(plain);
    console.log((plain as string).concat(this.secret));
    
    return (plain as string).concat(this.secret);
  }

  private _decryptString(cipher:string | null): string | null {
    if (cipher == null && cipher == "") return null;
    return (cipher as string).substr(0, (cipher as string).lastIndexOf(this.secret));
  }

}

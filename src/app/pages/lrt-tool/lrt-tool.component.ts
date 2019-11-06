import { Component, OnInit } from '@angular/core';
import * as isip from 'is-ip';

@Component({
  selector: 'app-lrt-tool',
  templateUrl: './lrt-tool.component.html',
  styleUrls: ['./lrt-tool.component.css']
})
export class LrtToolComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  
  inputIp: string = "";
  output: string = "";
  PhoneNumber: number;
  i: number = 0;
  rangeSize: number;
  
  validate(){
    if(isip(this.inputIp)){
    this.output = "I.P is valid !"
    }
    else
    {
      this.output = "I.P is invalid !"
    }

    }
  rangeGen(){
    while(this.i < this.rangeSize){
      console.log( `<route>\n\t<user type="E164">${this.PhoneNumber}</user>\n\t<next type="regex">!(^.*$)!sip:\\1@${this.inputIp}!</next>\n</route>\n`);
      let output = (`&ltroute&gt<br>&emsp;&ltuser type="E164"&gt${this.PhoneNumber}&lt/user&gt<br>&emsp;&ltnext type="regex"&gt!(^.*$)!sip:\\1@${this.inputIp}!&lt/next&gt<br>&lt/route&gt<br>`);
      var myWindow = window.open("", "MsgWindow", "width=200, height=100");
      myWindow.document.write(output);
      this.i++
      this.PhoneNumber++
  }
}}
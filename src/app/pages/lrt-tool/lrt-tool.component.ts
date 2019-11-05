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

  validate(){
    if(isip(this.inputIp)){
    console.log("I.P is valid !")
    this.output = "I.P is valid !"
    }
    else
    {
      console.log("I.P is invalid !")
      this.output = "I.P is invalid !"
    }

    }
  }
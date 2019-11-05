import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-csv-parse',
  templateUrl: './csv-parse.component.html',
  styleUrls: ['./csv-parse.component.css']
})
export class CsvParseComponent implements OnInit {
  
  tableData: any = null;
  csvArray = ""

  constructor() { }

  ngOnInit() {
  }
    
  csv2Array(fileInput) {
    Papa.parse(fileInput.target.files[0], {
      skipEmptyLines: true,
      header: true,
      complete: function(results){
        this.tableData = results.data;
        this.tableMeta = results.meta;
        this.csvLength = this.tableData["length"];
        let i: number = 0;
        let xmlOutput =""
        console.log(xmlOutput)
        /** Main loop that outputs XML, with some console.logging to check variables */
        while(i < this.csvLength){
          this.csvArray = this.tableData[i]
          console.log( `<route>\n\t<user type="E164">${this.csvArray["number"]}</user>\n\t<next type="regex">!(^.*$)!sip:\\1@${this.csvArray["ipAddress"]}!</next>\n</route>\n`);
          let output = (`&ltroute&gt<br>&emsp;&ltuser type="E164"&gt${this.csvArray["number"]}&lt/user&gt<br>&emsp;&ltnext type="regex"&gt!(^.*$)!sip:\\1@${this.csvArray["ipAddress"]}!&lt/next&gt<br>&lt/route&gt<br>`);
          var myWindow = window.open("", "MsgWindow", "width=1000, height=1000");
          myWindow.document.write(output);
          i++
        } 
      }
    })
  }
}
  /** }
  Attempted function to two way bind the XML output to csv-parse-component.html {{ xmlOutput }} still not working

  xmlConstruct() {
    for (let i = 0 ; i < this.tableData["length"]; i++) {
      let csvArray = this.tableData[i]
      const xmlOutput = `<route>\n\t<user type="E164">${this.csvArray["number"]}</user>\n\t<next type="regex">!(^.*$)!sip:\\1@${this.csvArray["ipAddress"]}!</next>\n</route>\n`
    }*/


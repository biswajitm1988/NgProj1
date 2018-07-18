import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes-demo',
  templateUrl: './builtin-pipes-demo.component.html',
  styleUrls: ['./builtin-pipes-demo.component.css']
})
export class BuiltinPipesDemoComponent implements OnInit {

  textData : string;
  numericData : number;
  dateData : Date;
  arrayData:number[];

  constructor() { 
  }

  ngOnInit() {
    this.arrayData=[123, 456, 897,233, 13, 7, 9, 85, 34, 56, 27, 81, 95, 100, 44, 77, 63];
    this.textData="Soem Text to display";
    this.numericData = 13.456789;
    this.dateData = new Date();
  }

}

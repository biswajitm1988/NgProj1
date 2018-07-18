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

  constructor() { 
  }

  ngOnInit() {

    this.textData="Soem Text to display";
    this.numericData = 13.456789;
    this.dateData = new Date();
  }

}

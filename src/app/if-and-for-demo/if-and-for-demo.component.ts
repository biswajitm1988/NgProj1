import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-and-for-demo',
  templateUrl: './if-and-for-demo.component.html',
  styleUrls: ['./if-and-for-demo.component.css']
})
export class IfAndForDemoComponent implements OnInit {

  isParaVisible:boolean;
  instructions:string[];
  constructor() { }

  ngOnInit() {
    this.isParaVisible=false;
    this.instructions=[
      "Instruction 1",
      "Instruction 2",
      "Instruction 3"
    ]
  }

}

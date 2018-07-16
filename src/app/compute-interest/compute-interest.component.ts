import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute-interest',
  templateUrl: './compute-interest.component.html',
  styleUrls: ['./compute-interest.component.css']
})
export class ComputeInterestComponent  {

  private p:number;
  private r:number;
  private t:number;
  private si:number;

  constructor() { 
    this.p=0;
    this.r=0;
    this.t=0;
    this.si=0;
  }

 computeInterest(){
   this.si=(this.p*this.r*this.t)/100.00;
 }

}

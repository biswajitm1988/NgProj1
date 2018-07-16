import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-compute-interest2',
  templateUrl: './compute-interest2.component.html',
  styleUrls: ['./compute-interest2.component.css'],
  providers:[LoanService]
})

export class ComputeInterest2Component implements OnInit {

  private loan:Loan;

  constructor(private loanService:LoanService) { }

  ngOnInit() {
    this.loan=new Loan();
  }

  computeInterestAndAmount(){
    //this.loan.simpleInterest=this.loanService.computeSI(this.loan.principle,this.loan.rateOfInterest,this.loan.timePeriod);
    //this.loan.totalAmount=this.loanService.computeTotalAmount(this.loan.principle,this.loan.simpleInterest);
    this.loanService.computeSimpleInterestAndAmount(this.loan);

  }
}

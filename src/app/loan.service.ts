import { Injectable } from '@angular/core';
import { Loan } from './models/loan';

@Injectable()
export class LoanService {

  constructor() { }
  computeSI(p:number,r:number,t:number):number{
    console.log(p);
    console.log(r);
    console.log(t);

    console.log((p*r*t)/100.00);
    return (p*r*t)/100.00;
  }
  computeTotalAmount(p:number,si:number):number{
    console.log(p);
    console.log(si);
    console.log(p+si);
    return p+si;
  }

  computeSimpleInterestAndAmount(loan:Loan):Loan{
    loan.simpleInterest=(loan.principle*loan.rateOfInterest*loan.rateOfInterest)/100.00;
    loan.totalAmount=loan.principle+loan.simpleInterest;
    return loan;
  }

}

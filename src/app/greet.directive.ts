import { Directive, Input } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreet]'
})
export class GreetDirective implements AfterViewInit{

  constructor(private ele:ElementRef) { }

  @Input() appGreet:string;
  @Input() salutation : string;


  ngAfterViewInit(): void{
    if(!this.appGreet){
      this.appGreet="Somebody";
    }

    let currentHour = (new Date()).getHours();

    let greetings: string="";
    if(currentHour>=3 && currentHour<12){
      greetings="Good Morning";
    }else if(currentHour>=12 && currentHour<=16){
      greetings="Good Afternoon";
    }else {
      greetings="Good Evening";
    }

    this.ele.nativeElement.innerHTML = greetings+" "+this.salutation+" "+this.appGreet;
  }

}

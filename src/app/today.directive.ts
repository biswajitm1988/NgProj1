import { Directive } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appToday]'
})
export class TodayDirective implements AfterViewInit{

  constructor( private ele: ElementRef) { }

  ngAfterViewInit():void{
    this.ele.nativeElement.innerHTML= (new Date()).toDateString();
  }
}

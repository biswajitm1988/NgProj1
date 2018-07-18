import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeDemo2'
})
export class CustomPipeDemo2Pipe implements PipeTransform {

  transform(value: number[], args?: any): number[] {
    let result: string="";
    let arrayData : number[]=value;
    let evenArray:number[]=[];
    console.log(arrayData);
    for(let i=0;i<arrayData.length;i++){
      console.log(arrayData[i]);
      console.log(arrayData[i]%2);
      if(((arrayData[i])%2)==0){
        evenArray.push(arrayData[i]);
      }
    }
    return evenArray;

  }

}

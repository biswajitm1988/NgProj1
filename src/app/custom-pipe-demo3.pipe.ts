import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeDemo3'
})
export class CustomPipeDemo3Pipe implements PipeTransform {

  transform(value: number[], multiplier: number): number[] {

    let input = multiplier;
    let arrayData : number[]=value;
    let multipleOf2:number[]=[];

    for(let i=0;i<arrayData.length;i++){
      if(((arrayData[i])%multiplier)==0){
        multipleOf2.push(arrayData[i]);
      }
    }
    return multipleOf2;

  }

}

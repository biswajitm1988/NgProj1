import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeDemo'
})
export class CustomPipeDemoPipe implements PipeTransform {

  words: string[]=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"]
  transform(value: any, args?: any): any {
    let result: string="";
    let input : string=value+"";

    for(let i=0; i<input.length;i++){
      let digit = parseInt(input.charAt(i));
      console.log("digit>"+digit);
      console.log("In words>"+this.words[digit]);
      result += this.words[digit]+ " ";
    }
    return result;

  }


}

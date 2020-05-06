import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.trim().length > 0){ 
      return value.substring(0,2).toUpperCase();
    } else {
      return "";
    }
    
  }

}

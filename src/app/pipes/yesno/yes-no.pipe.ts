import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNoPipe'
})
export class YesNoPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    if (value === true) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

}

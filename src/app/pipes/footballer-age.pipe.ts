import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'footballerAge'
})
export class FootballerAgePipe implements PipeTransform {

  transform(value: string): number {
    const birthDay = moment(value);
    const today = moment();
    return today.diff(birthDay, 'years');
  }

}

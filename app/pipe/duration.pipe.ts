import { Pipe, PipeTransform } from '@angular/core';
import { parse } from 'url';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    var h = parseInt(String(value/60));
    var m = value - (h * 60);
    return h +":" + m;
  }

}

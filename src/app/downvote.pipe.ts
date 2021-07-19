import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'downvote'
})
export class DownvotePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

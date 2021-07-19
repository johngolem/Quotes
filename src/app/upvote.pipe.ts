import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvote'
})
export class UpvotePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Hero {
  name: string;
}

// Value Service
@Injectable()
export class ValueService {
  value = 'real value';

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }

  getPromiseValue(): Promise<string> {
    return Promise.resolve('promise value');
  }

  getObservableDelayValue(): Observable<string> {
    return of('observable delay value').pipe(delay(10));
  }
}

// Master Service
@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) {}

  getValue(): string {
    return this.valueService.getValue();
  }
}

@Pipe({ name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(s: string): string {
    let r = '';
    for (let i = s.length; i;) {
      r += s[--i];
    }
    return r;
  }
}

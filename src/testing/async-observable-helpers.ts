import {defer, Observable, ObservedValueOf} from 'rxjs';

export function asyncData<T>(data: T): Observable<ObservedValueOf<Promise<T>>> {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any): Observable<ObservedValueOf<Promise<never>>> {
  return defer(() => Promise.reject(errorObject));
}

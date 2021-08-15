import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HttpErrorResponse} from '@angular/common/http';
import {asyncData, asyncError} from '../../testing/async-observable-helpers';

describe('HeroService with spies', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(httpClientSpy as any);
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes: Hero[] = [
      {id: 1, name: 'A'}, {id: 2, name: 'B'}
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => {
        expect(heroes).toEqual(expectedHeroes, 'expected heroes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      heroes => done.fail('expected an error, not heroes'),
      error => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });
});

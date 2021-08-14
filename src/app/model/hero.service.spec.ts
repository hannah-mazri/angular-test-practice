import {HeroService} from './hero.service';
import {Hero} from './hero';

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

    // httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
  });
});

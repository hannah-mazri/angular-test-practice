import { DashboardHeroComponent } from './dashboard-hero.component';
import {Hero} from '../model/hero';
import {first} from 'rxjs/operators';

describe('DashboardHeroComponent', () => {
  it('should create', () => {
    const component = new DashboardHeroComponent();
    const hero: Hero = {id: 42, name: 'Test'};
    component.hero = hero;

    component.selected.pipe(first()).subscribe((selectedHero: Hero) => {
      expect(selectedHero).toBe(hero);
    });
    component.click();
  });
});

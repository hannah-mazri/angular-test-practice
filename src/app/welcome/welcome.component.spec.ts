import { TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {UserService} from '../services/user.service';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User' };
}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WelcomeComponent,
        {provide: UserService, useClass: MockUserService}
      ]
    });

    component = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);
  });
});

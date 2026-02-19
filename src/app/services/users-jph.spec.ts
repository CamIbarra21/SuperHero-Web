import { TestBed } from '@angular/core/testing';

import { UsersJph } from './users-jph';

describe('UsersJph', () => {
  let service: UsersJph;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersJph);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

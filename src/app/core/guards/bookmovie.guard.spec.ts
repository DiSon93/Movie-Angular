import { TestBed } from '@angular/core/testing';

import { BookmovieGuard } from './bookmovie.guard';

describe('BookmovieGuard', () => {
  let guard: BookmovieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookmovieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

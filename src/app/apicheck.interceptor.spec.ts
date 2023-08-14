import { TestBed } from '@angular/core/testing';

import { ApicheckInterceptor } from './apicheck.interceptor';

describe('ApicheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApicheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApicheckInterceptor = TestBed.inject(ApicheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

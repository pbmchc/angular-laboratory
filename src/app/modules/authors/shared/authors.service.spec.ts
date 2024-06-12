import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [AuthorsService, provideHttpClient(), provideHttpClientTesting()]
    })
  );

  it('should be created', () => {
    const service: AuthorsService = TestBed.inject(AuthorsService);
    expect(service).toBeTruthy();
  });
});

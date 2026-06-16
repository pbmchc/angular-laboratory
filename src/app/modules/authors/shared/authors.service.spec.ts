import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AuthorsService,
        provideHttpClient(withXhr()),
        provideHttpClientTesting()
      ]
    })
  );

  it('should be created', () => {
    const service = TestBed.inject(AuthorsService);
    expect(service).toBeTruthy();
  });
});

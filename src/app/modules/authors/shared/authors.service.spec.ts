import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      AuthorsService
    ]
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});

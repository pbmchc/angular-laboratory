import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

describe('PostService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    })
  );

  it('should be created', () => {
    const service: PostsService = TestBed.inject(PostsService);
    expect(service).toBeTruthy();
  });
});

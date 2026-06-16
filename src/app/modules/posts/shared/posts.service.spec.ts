import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';

import { PostsService } from './posts.service';

describe('PostService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
    })
  );

  it('should be created', () => {
    const service: PostsService = TestBed.inject(PostsService);
    expect(service).toBeTruthy();
  });
});

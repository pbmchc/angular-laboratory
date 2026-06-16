import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { beforeEach, describe, expect, it } from 'vitest';

import { Post } from '../../../../shared/models/post/post.model';

import { PostTileComponent } from './post-tile.component';

describe('PostTileComponent', () => {
  let component: PostTileComponent;
  let fixture: ComponentFixture<PostTileComponent>;

  const mockPost = (id = 'id'): Post => ({ id }) as Post;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), PostTileComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTileComponent);
    component = fixture.componentInstance;
    component.post = mockPost();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

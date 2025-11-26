import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { Post } from '../../../../shared/models/post/post.model';

import { PostTileComponent } from './post-tile.component';

describe('PostTileComponent', () => {
  let component: PostTileComponent;
  let fixture: ComponentFixture<PostTileComponent>;

  const mockPost = (id: string = 'id'): Post => ({ id } as Post);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), PostTileComponent]
    }).compileComponents();
  }));

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

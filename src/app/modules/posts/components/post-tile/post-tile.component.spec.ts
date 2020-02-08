import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostTileComponent } from './post-tile.component';
import { Post } from 'src/app/shared/models/post/post.model';

describe('PostTileComponent', () => {
  let component: PostTileComponent;
  let fixture: ComponentFixture<PostTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PostTileComponent
      ]
    })
    .compileComponents();
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

  function mockPost(id: string = 'id'): Post {
    return { id } as Post;
  }
});

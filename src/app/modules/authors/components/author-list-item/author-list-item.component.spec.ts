import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListItemComponent } from './author-list-item.component';
import { Author } from '../../../../shared/models/author/author.model';

describe('AuthorListItemComponent', () => {
  let component: AuthorListItemComponent;
  let fixture: ComponentFixture<AuthorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListItemComponent);
    component = fixture.componentInstance;
    component.author = mockAuthor();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function mockAuthor(id: string = 'id', name: string = 'John Doe'): Author {
    return { id,  name };
  }
});

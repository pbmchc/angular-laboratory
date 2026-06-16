import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';

import { Author } from '../../../../shared/models/author/author.model';

import { AuthorListItemComponent } from './author-list-item.component';

describe('AuthorListItemComponent', () => {
  let component: AuthorListItemComponent;
  let fixture: ComponentFixture<AuthorListItemComponent>;

  const mockAuthor = (id = 'id', name = 'John Doe'): Author => ({ id, name });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthorListItemComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListItemComponent);
    component = fixture.componentInstance;
    component.author = mockAuthor();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

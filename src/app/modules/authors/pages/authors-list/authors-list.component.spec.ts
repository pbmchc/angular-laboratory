import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AuthorsListComponent } from './authors-list.component';

describe('AuthorsListComponent', () => {
  let component: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;
  let outlet: HTMLDivElement;

  const createPortalOutlet = () => {
    const outlet = document.createElement('div');
    outlet.id = 'ap-header-outlet';
    document.body.appendChild(outlet);
    return outlet;
  };

  const removePortalOutlet = () => {
    if (outlet && outlet.parentNode) {
      outlet.parentNode.removeChild(outlet);
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), AuthorsListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    outlet = createPortalOutlet();
    fixture = TestBed.createComponent(AuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    removePortalOutlet();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable, inject } from '@angular/core';
import { AsyncValidator, ValidationErrors } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';

import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';
import { AuthorForm } from '../../../../shared/models/author/author-form.model';
import { Author } from '../../../../shared/models/author/author.model';
import { getFullName } from '../../../../shared/utils/string.utils';
import { AuthorsService } from '../authors.service';

@Injectable()
export class UniqueAuthorValidator implements AsyncValidator {
  private authorsService = inject(AuthorsService);

  private readonly SIMULATED_DELAY = 1000;

  validate(form: AuthorForm): Observable<ValidationErrors | null> {
    const { firstName, lastName } = form.value as AuthorFormValue;

    return this.isExistingAuthor(getFullName(firstName, lastName)).pipe(
      map((existingAuthor) =>
        existingAuthor ? { existingAuthor: true } : null
      ),
      catchError(() => of(null))
    );
  }

  private isExistingAuthor(fullName: string): Observable<Author | undefined> {
    return this.authorsService.getAuthors().pipe(
      delay(this.SIMULATED_DELAY),
      map((authors: Author[]) =>
        authors.find(({ name }: Author) => name === fullName)
      )
    );
  }
}

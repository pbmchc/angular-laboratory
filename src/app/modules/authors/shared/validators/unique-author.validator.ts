import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';

import { AuthorForm } from '../../../../shared/models/author/author-form.model';
import { Author } from '../../../../shared/models/author/author.model';
import { getFullName } from '../../../../shared/utils/string.utils';
import { AuthorsService } from '../authors.service';

@Injectable()
export class UniqueAuthorValidator implements AsyncValidator {
  private readonly SIMULATED_DELAY = 1000;

  constructor(private authorsService: AuthorsService) {}

  validate({ value }: AuthorForm): Observable<ValidationErrors> {
    const { firstName, lastName } = value;

    return this.isExistingAuthor(getFullName(firstName, lastName)).pipe(
      map((existingAuthor: Author) => (existingAuthor ? { existingAuthor: true } : null)),
      catchError(() => null)
    );
  }

  private isExistingAuthor(fullName: string): Observable<Author> {
    return this.authorsService.getAuthors().pipe(
      delay(this.SIMULATED_DELAY),
      map((authors: Author[]) => authors.find(({ name }: Author) => name === fullName))
    );
  }
}

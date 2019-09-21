import { Injectable } from '@angular/core';
import { AsyncValidator, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthorsService } from '../authors.service';
import { map, catchError, delay } from 'rxjs/operators';

import { Author } from '../../../../shared/models/author/author.model';
import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';
import { getFullName } from '../../../../shared/utils/string.utils';

@Injectable()
export class UniqueAuthorValidator implements AsyncValidator {
    private readonly SIMULATED_DELAY = 1000;

    constructor(private authorsService: AuthorsService) { }

    validate({ value }: FormGroup): Observable<ValidationErrors> {
        const { firstName, lastName }: AuthorFormValue = value;

        return this.isExistingAuthor(getFullName(firstName, lastName)).pipe(
            map((existingAuthor: Author) => existingAuthor ? { existingAuthor: true } : null),
            catchError(() => null)
        );
    }

    private isExistingAuthor(fullName: string): Observable<Author> {
        return this.authorsService.getAuthors().pipe(
            delay(this.SIMULATED_DELAY),
            map((authors: Author[]) => authors.find(({ name }: Author) => name === fullName)
        ));
    }
}

import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { AuthorsService } from '../authors.service';

@Injectable()
export class UniqueAuthorValidator {
  private authorsService = inject(AuthorsService);

  private readonly SIMULATED_DELAY = 1000;

  validate(fullName: string): Observable<{ isUnique: boolean }> {
    return this.isUniqueAuthor(fullName).pipe(
      map((isUnique) => ({ isUnique }))
    );
  }

  private isUniqueAuthor(fullName: string): Observable<boolean> {
    return this.authorsService.getAuthors().pipe(
      delay(this.SIMULATED_DELAY),
      map((authors) => !authors.some(({ name }) => name === fullName))
    );
  }
}

import { Injectable, inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { RestService } from '../../../core/api/rest.service';
import { Author } from '../../../shared/models/author/author.model';

@Injectable()
export class AuthorsService {
  private restService = inject(RestService);

  private authors: Author[] = [];
  private authorsFetched: boolean;

  getAuthors(): Observable<Author[]> {
    return !this.authorsFetched ? this.fetchAuthors() : of(this.authors);
  }

  addAuthor({ name }: Partial<Author>): Observable<number> {
    return of(this.authors.push({ id: `${Date.now()}`, name }));
  }

  private fetchAuthors(): Observable<Author[]> {
    const url = 'assets/authors.json';

    return this.restService.get(url).pipe(
      map((authors: Author[]) => authors.concat(this.authors)),
      tap((authors: Author[]) => {
        this.authorsFetched = true;
        this.authors = authors;
      })
    );
  }
}

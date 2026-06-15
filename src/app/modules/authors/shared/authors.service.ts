import { Injectable, inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { RestService } from '../../../core/api/rest.service';
import { Author } from '../../../shared/models/author/author.model';

@Injectable()
export class AuthorsService {
  private restService = inject(RestService);

  private authors: Author[] = [];
  private authorsFetched = false;

  getAuthors(): Observable<Author[]> {
    return !this.authorsFetched ? this.fetchAuthors() : of(this.authors);
  }

  addAuthor({ name }: Pick<Author, 'name'>): Observable<number> {
    return of(this.authors.push({ id: `${Date.now()}`, name }));
  }

  private fetchAuthors(): Observable<Author[]> {
    const url = 'assets/authors.json';

    return this.restService.get<Author[]>(url).pipe(
      map((authors) => authors.concat(this.authors)),
      tap((authors) => {
        this.authorsFetched = true;
        this.authors = authors;
      })
    );
  }
}

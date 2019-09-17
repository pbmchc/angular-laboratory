import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { RestService } from 'src/app/core/api/rest.service';
import { Author } from 'src/app/shared/models/author/author.model';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {
    private authors: Author[] = [];
    private authorsFetched: boolean;

    constructor(private restService: RestService) { }

    getAuthors(): Observable<Author[]> {
        return !this.authorsFetched
            ? this.fetchAuthors()
            : of(this.authors);
    }

    addAuthor({ name }: Partial<Author>): Observable<number> {
        return of(this.authors.push({ id: `${Date.now()}`, name }));
    }

    private fetchAuthors(): Observable<Author[]> {
        const url = 'assets/authors.json';

        return this.restService.get(url)
            .pipe(
                map((authors: Author[]) => authors.concat(this.authors)),
                tap((authors: Author[]) => {
                    this.authorsFetched = true;
                    this.authors = authors;
                }),
            );
    }
}

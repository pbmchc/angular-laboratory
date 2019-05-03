import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/api/rest.service';
import { Author } from 'src/app/shared/models/author/author.model';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {

    constructor(private restService: RestService) { }

    getAuthors(): Observable<Author[]> {
        const url = 'assets/authors.json';

        return this.restService.get(url);
    }
}

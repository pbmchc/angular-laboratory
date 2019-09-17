import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorsService } from '../authors.service';
import { Author } from '../../../../shared/models/author/author.model';

@Injectable()
export class AuthorsListResolver implements Resolve<Author[]> {

    constructor(private authorsService: AuthorsService) { }

    resolve(): Observable<Author[]> {
        return this.authorsService.getAuthors();
    }
}

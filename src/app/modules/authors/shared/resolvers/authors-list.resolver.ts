import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Author } from '../../../../shared/models/author/author.model';
import { AuthorsService } from '../authors.service';

@Injectable()
export class AuthorsListResolver  {
  constructor(private authorsService: AuthorsService) {}

  resolve(): Observable<Author[]> {
    return this.authorsService.getAuthors();
  }
}

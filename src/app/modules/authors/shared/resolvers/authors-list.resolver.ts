import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Author } from '../../../../shared/models/author/author.model';
import { AuthorsService } from '../authors.service';

@Injectable()
export class AuthorsListResolver {
  private authorsService = inject(AuthorsService);

  resolve(): Observable<Author[]> {
    return this.authorsService.getAuthors();
  }
}

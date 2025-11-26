import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Author } from '../../../../shared/models/author/author.model';
import { AuthorFormComponent } from '../../components/author-form/author-form.component';
import { AuthorsService } from '../../shared/authors.service';

@Component({
  selector: 'ap-author-modify',
  templateUrl: './author-modify.component.html',
  styleUrls: ['./author-modify.component.scss'],
  imports: [AuthorFormComponent, RouterLink]
})
export class AuthorModifyComponent {
  private router = inject(Router);
  private authorsService = inject(AuthorsService);

  onSaveAuthor(author: Partial<Author>) {
    this.authorsService
      .addAuthor(author)
      .subscribe((_: number) => this.router.navigate(['/authors']));
  }
}

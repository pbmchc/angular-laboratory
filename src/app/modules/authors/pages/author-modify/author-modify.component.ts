import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../../../../shared/models/author/author.model';
import { AuthorsService } from '../../shared/authors.service';

@Component({
    selector: 'ap-author-modify',
    templateUrl: './author-modify.component.html',
    styleUrls: ['./author-modify.component.scss']
})
export class AuthorModifyComponent {
    constructor(private router: Router,
                private authorsService: AuthorsService) {}

    onSaveAuthor(author: Partial<Author>) {
        this.authorsService.addAuthor(author)
            .subscribe((_: number) => this.router.navigate(['/authors']));
    }
}

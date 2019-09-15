import { Component, Input } from '@angular/core';
import { Author } from '../../../../shared/models/author/author.model';

@Component({
    selector: 'ap-author-list-item',
    templateUrl: './author-list-item.component.html',
    styleUrls: ['./author-list-item.component.scss']
})
export class AuthorListItemComponent {
    @Input() author: Author;
}

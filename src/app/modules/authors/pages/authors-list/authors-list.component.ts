import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/shared/models/author/author.model';

@Component({
    selector: 'ap-authors-list',
    templateUrl: './authors-list.component.html',
    styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

    authors: Author[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.authors = this.route.snapshot.data.authors;
    }

    authorsTrackingFunction(_: number, item: Author): string {
        return item.id;
    }
}

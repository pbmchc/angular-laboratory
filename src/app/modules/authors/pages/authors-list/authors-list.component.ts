import { Component, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Author } from '../../../../shared/models/author/author.model';
import { trackBy } from '../../../../shared/utils/list.utils';

@Component({
  selector: 'ap-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[];
  trackByAuthorId: TrackByFunction<Author> = trackBy('id');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.authors = this.route.snapshot.data.authors;
  }
}

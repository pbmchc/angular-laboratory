import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HeaderPortalComponent } from '../../../../shared/components/header-portal/header-portal.component';
import { HasAdminRoleDirective } from '../../../../shared/directives/has-admin-role.directive';
import { Author } from '../../../../shared/models/author/author.model';
import { trackBy } from '../../../../shared/utils/list.utils';
import { AuthorListItemComponent } from '../../components/author-list-item/author-list-item.component';

@Component({
  selector: 'ap-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
  imports: [
    AuthorListItemComponent,
    HeaderPortalComponent,
    HasAdminRoleDirective,
    RouterLink
  ]
})
export class AuthorsListComponent implements OnInit {
  private route = inject(ActivatedRoute);

  authors: Author[];
  trackByAuthorId = trackBy<Author>('id');

  ngOnInit() {
    this.authors = this.route.snapshot.data.authors;
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorListItemComponent } from './components/author-list-item/author-list-item.component';
import { AuthorModifyComponent } from './pages/author-modify/author-modify.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorsService } from './shared/authors.service';
import { AuthorsListResolver } from './shared/resolvers/authors-list.resolver';
import { UniqueAuthorValidator } from './shared/validators/unique-author.validator';

@NgModule({
  declarations: [
    AuthorFormComponent,
    AuthorsListComponent,
    AuthorListItemComponent,
    AuthorModifyComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ],
  providers: [
    AuthorsListResolver,
    AuthorsService,
    UniqueAuthorValidator
  ]
})
export class AuthorsModule {}

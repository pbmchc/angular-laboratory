import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './authors-routing.module';

import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorListItemComponent } from './components/author-list-item/author-list-item.component';

@NgModule({
    declarations: [
        AuthorsListComponent,
        AuthorListItemComponent
    ],
    imports: [
        CommonModule,
        AuthorsRoutingModule
    ]
})
export class AuthorsModule { }

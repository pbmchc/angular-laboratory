import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './authors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorListItemComponent } from './components/author-list-item/author-list-item.component';
import { AuthorModifyComponent } from './pages/author-modify/author-modify.component';

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
    ]
})
export class AuthorsModule { }

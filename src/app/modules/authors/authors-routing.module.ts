import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsListResolver } from './shared/resolvers/authors-list.resolver';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorModifyComponent } from './pages/author-modify/author-modify.component';

const routes: Routes = [
    {
        path: '',
        component: AuthorsListComponent,
        resolve: {
            authors: AuthorsListResolver
        }
    },
    {
        path: 'new',
        component: AuthorModifyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule { }

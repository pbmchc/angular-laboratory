import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsListResolver } from './shared/resolvers/authors-list.resolver';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';

const routes: Routes = [
    {
        path: '',
        component: AuthorsListComponent,
        resolve: {
            authors: AuthorsListResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule { }

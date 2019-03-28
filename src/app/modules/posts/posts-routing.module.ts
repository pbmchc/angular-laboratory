import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './pages/post-list/post-list.component';
import { PostListResolver } from './shared/resolvers/post-list.resolver';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostDetailsResolver } from './shared/resolvers/post-details.resolver';

const routes: Routes = [
    {
        path: 'posts',
        component: PostListComponent,
        resolve: {
            posts: PostListResolver
        }
    },
    {
        path: 'posts/:id',
        component: PostDetailsComponent,
        resolve: {
            post: PostDetailsResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './pages/post-list/post-list.component';
import { PostListResolver } from './shared/resolvers/post-list.resolver';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
    resolve: {
      posts: PostListResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

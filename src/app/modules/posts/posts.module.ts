import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PostTileComponent } from './components/post-tile/post-tile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    PostTileComponent,
    PostDetailsComponent,
    PostListComponent
  ],
  providers: [provideHttpClient()]
})
export class PostsModule {}

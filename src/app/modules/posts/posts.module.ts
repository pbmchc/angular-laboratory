import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PostTileComponent } from './components/post-tile/post-tile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostTileComponent, PostListComponent, PostDetailsComponent],
  exports: [],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  providers: [provideHttpClient()]
})
export class PostsModule {}

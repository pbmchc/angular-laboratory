import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PostTileComponent } from './components/post-tile/post-tile.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostTileComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostTileComponent, PostListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  exports: []
})
export class PostsModule { }

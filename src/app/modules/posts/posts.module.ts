import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

@NgModule({
  declarations: [
    PostTileComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  exports: []
})
export class PostsModule { }

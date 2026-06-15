import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';
import { Post } from '../../../../shared/models/post/post.model';
import { trackBy } from '../../../../shared/utils/list.utils';
import { PostTileComponent } from '../../components/post-tile/post-tile.component';
import { PostsService } from '../../shared/posts.service';

@Component({
  selector: 'ap-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [AsyncPipe, PostTileComponent, SearchInputComponent]
})
export class PostListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);

  posts$!: Observable<Post[]>;
  trackByPostId = trackBy<Post>('id');

  ngOnInit() {
    this.posts$ = of(this.route.snapshot.data.posts);
  }

  filterPosts(searchTerm: string): void {
    this.posts$ = this.postsService.getFilteredPosts(searchTerm);
  }
}

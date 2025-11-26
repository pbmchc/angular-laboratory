import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';
import { Post } from '../../../../shared/models/post/post.model';
import { trackBy } from '../../../../shared/utils/list.utils';
import { PostTileComponent } from '../../components/post-tile/post-tile.component';
import { PostsService } from '../../shared/posts.service';

@Component({
  selector: 'ap-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [PostTileComponent, SearchInputComponent]
})
export class PostListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);

  posts: Post[];
  trackByPostId = trackBy<Post>('id');

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
  }

  filterPosts(searchTerm: string): void {
    this.postsService
      .getFilteredPosts(searchTerm)
      .subscribe((posts) => (this.posts = posts));
  }
}

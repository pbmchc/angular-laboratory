import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from '../../../../shared/models/post/post.model';
import { PostsService } from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostListResolver {
  private postsService = inject(PostsService);

  resolve(): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}

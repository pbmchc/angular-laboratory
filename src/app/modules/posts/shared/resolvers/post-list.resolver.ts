import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from '../../../../shared/models/post/post.model';
import { PostsService } from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostListResolver  {
  constructor(private postsService: PostsService) {}

  resolve(): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}

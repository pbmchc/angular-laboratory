import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Post } from '../../../../shared/models/post/post.model';
import { PostsService } from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostListResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsService) {}

  resolve(): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}

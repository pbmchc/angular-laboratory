import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Post } from '../../../../shared/models/post/post.model';
import { PostsService } from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    return this.postsService.getPostDetails(route.params.id);
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../../../../shared/models/post/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<Post> {

    constructor(private postsService: PostsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        return this.postsService.getPostDetails(route.params.id);
    }
}

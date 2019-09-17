import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../../../../shared/models/post/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostListResolver implements Resolve<Post[]> {

    constructor(private postsService: PostsService) { }

    resolve(): Observable<Post[]> {
        return this.postsService.getPosts();
    }
}

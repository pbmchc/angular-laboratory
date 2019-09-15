import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from 'src/app/shared/models/post/post.model';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostListResolver implements Resolve<Post[]> {

    constructor(private postsService: PostsService) { }

    resolve(): Observable<Post[]> {
        return this.postsService.getPosts();
    }
}

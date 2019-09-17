import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from '../../../core/api/rest.service';
import { Post } from '../../../shared/models/post/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private restService: RestService) { }

    getPosts(): Observable<Post[]> {
        const url = 'assets/posts.json';

        return this.restService.get(url);
    }

    getFilteredPosts(searchTerm: string): Observable<Post[]> {
        return this.getPosts().pipe(
            map(posts => posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())))
        );
    }

    getPostDetails(id: string): Observable<Post> {
        return this.getPosts().pipe(
            map(posts => posts.find(post => post.id === id))
        );
    }
}

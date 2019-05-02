import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/api/rest.service';
import { Post } from 'src/app/shared/models/post/post.model';
import { map } from 'rxjs/operators';

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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/api/rest.service';
import { Post } from 'src/app/shared/models/post/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private restService: RestService) { }

    getPosts(): Observable<Post[]> {
        const url = 'assets/posts.json';

        return this.restService.get(url);
    }
}

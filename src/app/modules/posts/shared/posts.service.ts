import { Injectable } from '@angular/core';
import { PostsModule } from '../posts.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any> {
        const url = 'assets/posts.json'

        return this.http.get(url);
    }
}

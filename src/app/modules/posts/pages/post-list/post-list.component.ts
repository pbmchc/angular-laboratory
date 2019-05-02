import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post/post.model';

@Component({
    selector: 'ap-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    posts: Post[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    filterPosts(searchTerm: string): void {
        console.log(searchTerm);
    }
}

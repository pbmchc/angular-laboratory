import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post/post.model';

@Component({
    selector: 'ap-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

    post: Post;

    constructor(private route: ActivatedRoute) {
        this.post = this.route.snapshot.data.post;
    }

    ngOnInit() { }

}

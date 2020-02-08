import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../shared/models/post/post.model';

@Component({
    selector: 'ap-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
    post: Post;

    constructor(private route: ActivatedRoute) {
        this.post = this.route.snapshot.data.post;
    }
}

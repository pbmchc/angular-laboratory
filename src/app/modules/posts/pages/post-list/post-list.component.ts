import { Component, OnInit, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/posts.service';
import { Post } from '../../../../shared/models/post/post.model';
import { trackBy } from '../../../../shared/utils/list.utils';

@Component({
    selector: 'ap-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts: Post[];
    trackByPostId: TrackByFunction<Post> = trackBy('id');

    constructor(private route: ActivatedRoute,
                private postsService: PostsService) { }

    ngOnInit() {
        this.posts = this.route.snapshot.data.posts;
    }

    filterPosts(searchTerm: string): void {
        this.postsService.getFilteredPosts(searchTerm)
            .subscribe(posts => this.posts = posts);
    }
}

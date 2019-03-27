import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post/post.model';

@Component({
    selector: 'ap-post-tile',
    templateUrl: './post-tile.component.html',
    styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {

    @Input()
    post: Post; 

    constructor() { }

    ngOnInit() { }
}

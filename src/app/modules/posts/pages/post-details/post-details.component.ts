import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Post } from '../../../../shared/models/post/post.model';

@Component({
  selector: 'ap-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  imports: [RouterLink]
})
export class PostDetailsComponent {
  private route = inject(ActivatedRoute);

  post: Post;

  constructor() {
    this.post = this.route.snapshot.data.post;
  }
}

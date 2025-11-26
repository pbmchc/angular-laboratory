import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Post } from '../../../../shared/models/post/post.model';

@Component({
  selector: 'ap-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss'],
  imports: [RouterLink]
})
export class PostTileComponent {
  @Input() post: Post;
}

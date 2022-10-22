import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ROUTES_TITLES } from '../../../../core/constants/routes.constants';

@Injectable({
    providedIn: 'root'
})
export class PostTitleResolver implements Resolve<string> {
  private readonly POST_IDENTIFIER_KEY = 'id';

  resolve(snapshot: ActivatedRouteSnapshot): string {
    const postIdentifier = snapshot.params[this.POST_IDENTIFIER_KEY] ?? '';
    const [, postNumber] = postIdentifier.split('-');

    return postNumber ? `${ROUTES_TITLES.POSTS} - #${postNumber}` : ROUTES_TITLES.POSTS;
  }
}

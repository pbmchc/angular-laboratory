import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleStrategy extends TitleStrategy {
  private title = inject(Title);

  private readonly DEFAULT_APP_TITLE = 'Angulab';

  override updateTitle(routerState: RouterStateSnapshot) {
    const pageTitle = this.buildTitle(routerState);

    this.title.setTitle(
      pageTitle
        ? `${this.DEFAULT_APP_TITLE} - ${pageTitle}`
        : this.DEFAULT_APP_TITLE
    );
  }
}

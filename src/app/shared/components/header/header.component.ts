import { Component, OnInit, TrackByFunction } from '@angular/core';

import { RouteConfig } from '../../models/route-config.model';
import { Route } from '../../models/route.model';
import { trackBy } from '../../utils/list.utils';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: RouteConfig[];
  trackByRouteKey: TrackByFunction<RouteConfig> = trackBy('label');

  private readonly AVAILABLE_ROUTES: Route[] = [
    { key: 'posts', label: $localize `:@@routes.posts:POSTS` },
    { key: 'authors', label: $localize `:@@routes.authors:AUTHORS` },
    { key: 'topics', label: $localize `:@@routes.topics:TOPICS` }
  ];

  ngOnInit() {
    this.routes = this.loadAvailableRoutes();
  }

  private loadAvailableRoutes(): RouteConfig[] {
    return this.AVAILABLE_ROUTES.map(({ key, label }: Route) => ({
      key,
      label,
      link: `/${key}`
    }));
  }
}

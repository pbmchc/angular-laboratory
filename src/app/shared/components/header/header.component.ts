import { Component, OnInit, TrackByFunction } from '@angular/core';

import { RouteConfig } from '../../models/route-config.model';
import { trackBy } from '../../utils/list.utils';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: RouteConfig[];
  trackByRouteKey: TrackByFunction<RouteConfig> = trackBy('label');

  private readonly AVAILABLE_ROUTES = ['posts', 'authors', 'topics'];

  ngOnInit() {
    this.routes = this.loadAvailableRoutes();
  }

  private loadAvailableRoutes(): RouteConfig[] {
    return this.AVAILABLE_ROUTES.map((route: string) => ({
      key: route,
      link: `/${route}`,
      label: route.toUpperCase()
    }));
  }
}

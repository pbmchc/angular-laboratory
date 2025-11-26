import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ROUTES } from '../../../core/constants/routes.constants';
import { RouteConfig } from '../../models/route-config.model';
import { Route } from '../../models/route.model';
import { trackBy } from '../../utils/list.utils';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink]
})
export class HeaderComponent implements OnInit {
  routes: RouteConfig[];
  trackByRouteKey = trackBy<RouteConfig>('key');

  ngOnInit() {
    this.routes = this.getAvailableRoutes();
  }

  private getAvailableRoutes(): RouteConfig[] {
    return ROUTES.map(({ key, title }: Route) => ({
      key,
      title,
      link: `/${key}`
    }));
  }
}

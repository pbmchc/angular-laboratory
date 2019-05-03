import { Component, OnInit } from '@angular/core';
import { RouteConfig } from '../../../shared/models/route-config.model';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    routes: RouteConfig[];

    private readonly AVAILABLE_ROUTES = ['posts', 'authors'];

    constructor() { }

    ngOnInit() {
        this.routes = this.loadAvailableRoutes();
    }

    private loadAvailableRoutes(): RouteConfig[] {
        return this.AVAILABLE_ROUTES.map((route: string) =>
            ({
                link: `/${route}`,
                label: route.toUpperCase()
            })
        );
    }
}

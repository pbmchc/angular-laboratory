import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { PRELOAD_ROUTE } from '../constants/app.constants';

@Injectable({
    providedIn: 'root'
})
export class RoutesPreloader implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        return this.shouldPreloadRoute(route) ? load() : of(null);
    }

    private shouldPreloadRoute({ data }: Route): boolean {
        return data && data[PRELOAD_ROUTE];
    }
}

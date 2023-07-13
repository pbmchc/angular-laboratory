import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesPreloader implements PreloadingStrategy {
  private readonly PRELOAD_ROUTE_FLAG = 'preload';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.shouldPreloadRoute(route) ? load() : of(null);
  }

  private shouldPreloadRoute({ data }: Route): boolean {
    return data?.[this.PRELOAD_ROUTE_FLAG];
  }
}

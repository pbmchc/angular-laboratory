import { NgModule } from '@angular/core';
import { Routes, RouterModule, TitleStrategy } from '@angular/router';

import { ROUTES_TITLES } from './core/constants/routes.constants';
import { RoutesPreloader } from './core/preloaders/routes-preloader';
import { PageTitleStrategy } from './core/strategies/page-title-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'authors',
    loadChildren: () => import('./modules/authors/authors.module').then(m => m.AuthorsModule),
    data: {
      preload: true
    },
    title: ROUTES_TITLES.AUTHORS
  },
  {
    path: 'topics',
    loadChildren: () => import('./modules/topics/topics.module').then(m => m.TopicsModule),
    title: ROUTES_TITLES.TOPICS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: RoutesPreloader })],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    }
  ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRELOAD_ROUTE } from './core/constants/app.constants';
import { RoutesPreloader } from './core/preloaders/routes-preloader';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts'
    },
    {
        path: 'authors',
        loadChildren: './modules/authors/authors.module#AuthorsModule',
        data: {
            [PRELOAD_ROUTE]: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { preloadingStrategy: RoutesPreloader }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }

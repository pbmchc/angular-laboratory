import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesPreloader } from './core/preloaders/routes-preloader';

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

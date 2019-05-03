import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'authors',
        loadChildren: './modules/authors/authors.module#AuthorsModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

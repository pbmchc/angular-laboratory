import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchInputComponent } from './components/search-input/search-input.component';

import { HasAdminRoleDirective } from './directives/has-admin-role.directive';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        HasAdminRoleDirective,
        SearchInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    exports: [
        HasAdminRoleDirective,
        SearchInputComponent,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    constructor() {
        library.add(faSearch);
    }
}

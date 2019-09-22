import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchInputComponent } from './components/search-input/search-input.component';

import { HasAdminRoleDirective } from './directives/has-admin-role.directive';


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
    constructor(private library: FaIconLibrary) {
        this.library.addIconPacks(fas);
        this.library.addIcons(faSearch);
    }
}

import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons';

import { HeaderPortalComponent } from './components/header-portal/header-portal.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { HasAdminRoleDirective } from './directives/has-admin-role.directive';

@NgModule({
  declarations: [
    HasAdminRoleDirective,
    HeaderPortalComponent,
    SearchInputComponent,
    TabMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    FormsModule,
    HasAdminRoleDirective,
    HeaderPortalComponent,
    SearchInputComponent,
    PortalModule,
    ReactiveFormsModule,
    TabMenuComponent
  ]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIconPacks(fas);
    this.library.addIcons(faSearch);
  }
}

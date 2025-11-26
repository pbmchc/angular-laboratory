import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeaderPortalComponent } from './components/header-portal/header-portal.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { HasAdminRoleDirective } from './directives/has-admin-role.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    HeaderPortalComponent,
    SearchInputComponent,
    TabMenuComponent,
    HasAdminRoleDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeaderPortalComponent,
    SearchInputComponent,
    TabMenuComponent,
    HasAdminRoleDirective
  ]
})
export class SharedModule {}

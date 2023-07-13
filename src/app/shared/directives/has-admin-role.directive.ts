import { NgIf, NgIfContext } from '@angular/common';
import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

import { RolesService } from '../../core/auth/roles.service';

@Directive({ selector: '[apHasAdminRole]' })
export class HasAdminRoleDirective<T> extends NgIf implements OnInit {
  constructor(templateRef: TemplateRef<NgIfContext<T>>,
              viewContainerRef: ViewContainerRef,
              private rolesService: RolesService) {
    super(viewContainerRef, templateRef);
  }

  ngOnInit() {
    this.ngIf = this.rolesService.isAdmin();
  }
}

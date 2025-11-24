import { NgIf, NgIfContext } from '@angular/common';
import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  inject
} from '@angular/core';

import { RolesService } from '../../core/auth/roles.service';

@Directive({
  selector: '[apHasAdminRole]',
  standalone: false
})
export class HasAdminRoleDirective<T> extends NgIf implements OnInit {
  private rolesService = inject(RolesService);

  constructor() {
    const templateRef = inject<TemplateRef<NgIfContext<T>>>(TemplateRef);
    const viewContainerRef = inject(ViewContainerRef);

    super(viewContainerRef, templateRef);
  }

  ngOnInit() {
    this.ngIf = this.rolesService.isAdmin();
  }
}

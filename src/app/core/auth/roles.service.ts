import { Inject, Injectable, Optional } from '@angular/core';

import { UserRole } from '../../shared/enums/user-role.enum';
import { User } from '../../shared/models/auth/user.model';
import { USER } from '../../shared/tokens/user.token';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(@Optional() @Inject(USER) private user: User) {}

  isAdmin(): boolean {
    return this.hasRole(UserRole.Admin);
  }

  private hasRole(...roles: UserRole[]): boolean {
    return roles.some((role: UserRole) => this.user.roles.includes(role));
  }
}

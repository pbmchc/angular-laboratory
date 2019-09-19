import { Inject, Injectable, Optional } from '@angular/core';

import { USER } from '../../shared/tokens/user.token';
import { User } from '../../shared/models/auth/user.model';
import { UserRole } from '../../shared/enums/user-role.enum';

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    constructor(@Optional() @Inject(USER) private user: User) { }

    isAdmin(): boolean {
        return this.hasRole(UserRole.Admin);
    }

    private hasRole(...roles: UserRole[]): boolean {
        return roles.some((role: UserRole) =>
            this.user.roles.includes(role));
    }
}

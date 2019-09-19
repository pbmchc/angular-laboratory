import { UserRole } from '../../enums/user-role.enum';

export interface User {
    id: string;
    roles: UserRole[];
}

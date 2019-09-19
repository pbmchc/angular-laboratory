import { InjectionToken } from '@angular/core';

import { User } from '../models/auth/user.model';

export const USER = new InjectionToken<User>('mocked-user');

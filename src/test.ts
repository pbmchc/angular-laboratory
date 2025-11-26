// This file is required by karma.conf.js and loads recursively all the .spec and framework files

/// <reference types="@angular/localize" />

import { getTestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting
} from '@angular/platform-browser/testing';

import { UserRole } from './app/shared/enums/user-role.enum';
import { USER } from './app/shared/tokens/user.token';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting([
    [
      {
        provide: USER,
        useValue: {
          id: 'ID_1',
          roles: [UserRole.Admin]
        }
      }
    ]
  ])
);

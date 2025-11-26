/// <reference types="@angular/localize" />

import {
  enableProdMode,
  provideZoneChangeDetection,
  importProvidersFrom
} from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { PostsModule } from './app/modules/posts/posts.module';
import { UserRole } from './app/shared/enums/user-role.enum';
import { SharedModule } from './app/shared/shared.module';
import { USER } from './app/shared/tokens/user.token';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      PostsModule,
      SharedModule
    ),
    {
      provide: USER,
      useValue: {
        id: 'ID_1',
        roles: [UserRole.Admin]
      }
    },
    provideZoneChangeDetection()
  ]
}).catch((err) => console.error(err));

import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostsModule } from './modules/posts/posts.module';
import { UserRole } from './shared/enums/user-role.enum';
import { SharedModule } from './shared/shared.module';
import { USER } from './shared/tokens/user.token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PostsModule,
    SharedModule
  ],
  providers: [
    {
      provide: USER,
      useValue: { id: 'ID_1', roles: [UserRole.Admin] }
    },
    provideZoneChangeDetection()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

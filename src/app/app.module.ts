import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostsModule } from './modules/posts/posts.module';
import { UserRole } from './shared/enums/user-role.enum';
import { USER } from './shared/tokens/user.token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PostsModule
  ],
  providers: [
    {
      provide: USER,
      useValue: { id: 'ID_1', roles: [UserRole.Admin] }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

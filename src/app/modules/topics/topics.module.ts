import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { TopicDetailsComponent } from './pages/topic-details.component';
import { TopicsRoutingModule } from './topics-routing.module';

@NgModule({
  declarations: [
    TopicDetailsComponent,
    TopicViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TopicsRoutingModule
  ],
  exports: []
})
export class TopicsModule {}

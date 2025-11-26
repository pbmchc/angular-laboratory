import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { TopicDetailsComponent } from './pages/topic-details.component';
import { TopicsRoutingModule } from './topics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopicsRoutingModule,
    TopicDetailsComponent,
    TopicViewComponent
  ],
  exports: []
})
export class TopicsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TopicDetailsComponent } from './pages/topic-details.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicViewComponent } from './components/topic-view/topic-view.component';

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

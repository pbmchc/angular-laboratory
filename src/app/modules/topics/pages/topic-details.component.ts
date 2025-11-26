import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderPortalComponent } from '../../../shared/components/header-portal/header-portal.component';
import { TabMenuComponent } from '../../../shared/components/tab-menu/tab-menu.component';
import { Tab } from '../../../shared/models/tab/tab.model';
import { Topic } from '../../../shared/models/topic/topic.model';
import { trackBy } from '../../../shared/utils/list.utils';
import { TopicViewComponent } from '../components/topic-view/topic-view.component';

@Component({
  selector: 'ap-topic-details',
  templateUrl: './topic-details.component.html',
  imports: [
    FormsModule,
    HeaderPortalComponent,
    TabMenuComponent,
    TopicViewComponent
  ]
})
export class TopicDetailsComponent implements OnInit {
  currentTopic: string;
  topics: Topic[];
  topicTabs: Tab[];
  trackByTitle = trackBy<Topic>('title');

  ngOnInit() {
    this.topics = this.generateTopics();
    this.topicTabs = this.generateTopicTabs();
  }

  private generateTopics(length: number = 3): Topic[] {
    return Array.from({ length }).map((_, index) => ({
      title: `Topic ${index + 1}`,
      description: `Some description for topic ${index + 1}`
    }));
  }

  private generateTopicTabs(topics: Topic[] = this.topics): Tab[] {
    return topics.map(({ title }: Topic) => ({
      label: title,
      value: title
    }));
  }
}

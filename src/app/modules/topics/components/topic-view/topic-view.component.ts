import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../../../shared/models/topic/topic.model';

@Component({
    selector: 'ap-topic-view',
    templateUrl: './topic-view.component.html'
})
export class TopicViewComponent {
    @Input() topic: Topic;
}

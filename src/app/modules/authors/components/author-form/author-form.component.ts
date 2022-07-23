import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthorForm } from '../../../../shared/models/author/author-form.model';
import { Author } from '../../../../shared/models/author/author.model';

import { AuthorFormBuilder } from './author-form-builder.service';
import { AUTHOR_FORM_CONTROLS } from './author-form.constants';

@Component({
  selector: 'ap-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
  providers: [AuthorFormBuilder]
})
export class AuthorFormComponent implements OnInit {
  @Output() saveAuthor = new EventEmitter<Partial<Author>>();
  authorForm: AuthorForm;
  readonly AUTHOR_FORM_CONTROLS = AUTHOR_FORM_CONTROLS;

  constructor(private authorFormBuilder: AuthorFormBuilder) {}

  ngOnInit() {
    this.authorForm = this.authorFormBuilder.buildAuthorForm();
  }

  onSubmit() {
    const author = this.authorFormBuilder.formatAuthorFormValue(this.authorForm.value);

    this.saveAuthor.emit(author);
  }
}

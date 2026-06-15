import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';
import { AuthorForm } from '../../../../shared/models/author/author-form.model';
import { Author } from '../../../../shared/models/author/author.model';

import { AuthorFormBuilder } from './author-form-builder.service';
import { AUTHOR_FORM_CONTROLS } from './author-form.constants';

@Component({
  selector: 'ap-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
  providers: [AuthorFormBuilder],
  imports: [FormsModule, ReactiveFormsModule]
})
export class AuthorFormComponent implements OnInit {
  private authorFormBuilder = inject(AuthorFormBuilder);

  @Output() saveAuthor = new EventEmitter<Pick<Author, 'name'>>();
  authorForm!: AuthorForm;
  readonly AUTHOR_FORM_CONTROLS = AUTHOR_FORM_CONTROLS;

  ngOnInit() {
    this.authorForm = this.authorFormBuilder.buildAuthorForm();
  }

  onSubmit() {
    const author = this.authorFormBuilder.formatAuthorFormValue(
      this.authorForm.value as AuthorFormValue
    );

    this.saveAuthor.emit(author);
  }
}

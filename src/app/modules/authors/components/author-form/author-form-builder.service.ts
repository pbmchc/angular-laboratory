import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';
import { Author } from '../../../../shared/models/author/author.model';
import { getFullName } from '../../../../shared/utils/string.utils';
import { UniqueAuthorValidator } from '../../shared/validators/unique-author.validator';

import { AUTHOR_FORM_CONTROLS } from './author-form.constants';

@Injectable()
export class AuthorFormBuilder {
  constructor(private formBuilder: FormBuilder,
              private uniqueAuthorValidator: UniqueAuthorValidator) {}

  buildAuthorForm(): FormGroup {
    return this.formBuilder.group(
      {
        [AUTHOR_FORM_CONTROLS.FIRSTNAME]: ['', Validators.required],
        [AUTHOR_FORM_CONTROLS.LASTNAME]: ['', Validators.required]
      },
      this.getAuthorFormOptions()
    );
  }

  formatAuthorFormValue({ firstName, lastName }: AuthorFormValue): Partial<Author> {
    return { name: getFullName(firstName, lastName) };
  }

  private getAuthorFormOptions(): AbstractControlOptions {
    return {
      asyncValidators: this.uniqueAuthorValidator.validate.bind(this.uniqueAuthorValidator),
      updateOn: 'blur'
    };
  }
}

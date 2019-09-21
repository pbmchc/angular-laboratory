import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AUTHOR_FORM_CONTROLS } from './author-form.constants';
import { UniqueAuthorValidator } from '../../shared/validators/unique-author.validator';
import { Author } from '../../../../shared/models/author/author.model';
import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';
import { getFullName } from '../../../../shared/utils/string.utils';

@Injectable()
export class AuthorFormBuilder {
    constructor(private formBuilder: FormBuilder,
                private uniqueAuthorValidator: UniqueAuthorValidator) { }

    buildAuthorForm(): FormGroup {
        return this.formBuilder.group({
            [AUTHOR_FORM_CONTROLS.FIRSTNAME]: ['', Validators.required],
            [AUTHOR_FORM_CONTROLS.LASTNAME]: ['', Validators.required]
        }, this.getAuthorFormOptions());
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

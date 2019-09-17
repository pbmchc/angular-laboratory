import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AUTHOR_FORM_CONTROLS } from './author-form.constants';
import { Author } from '../../../../shared/models/author/author.model';
import { AuthorFormValue } from '../../../../shared/models/author/author-form-value.model';

@Injectable()
export class AuthorFormBuilder {
    constructor(private formBuilder: FormBuilder) { }

    buildAuthorForm(): FormGroup {
        return this.formBuilder.group({
            [AUTHOR_FORM_CONTROLS.FIRSTNAME]: ['', Validators.required],
            [AUTHOR_FORM_CONTROLS.LASTNAME]: ['', Validators.required]
        });
    }

    formatAuthorFormValue({ firstName, lastName }: AuthorFormValue): Partial<Author> {
        return { name: `${firstName} ${lastName}`.trim() };
    }
}

import {
  Component,
  EventEmitter,
  inject,
  Output,
  signal,
  Signal
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  debounce,
  form,
  FormField,
  FormRoot,
  required,
  validateAsync
} from '@angular/forms/signals';

import { Author } from '../../../../shared/models/author/author.model';
import { getFullName } from '../../../../shared/utils/string.utils';
import { UniqueAuthorValidator } from '../../shared/validators/unique-author.validator';

@Component({
  selector: 'ap-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
  imports: [FormField, FormRoot]
})
export class AuthorFormComponent {
  private uniqueAuthorValidator = inject(UniqueAuthorValidator);

  authorFormModel = signal({ firstName: '', lastName: '' });
  authorForm = form(
    this.authorFormModel,
    (form) => {
      debounce(form, 'blur');
      required(form.firstName);
      required(form.lastName);
      validateAsync(form, {
        params: ({ value }) => {
          const { firstName, lastName } = value();
          return getFullName(firstName, lastName);
        },
        factory: (fullName: Signal<string | undefined>) =>
          rxResource({
            params: () => fullName(),
            stream: ({ params }) => this.uniqueAuthorValidator.validate(params)
          }),
        onSuccess: (result) =>
          result.isUnique
            ? null
            : {
                kind: 'uniqueness',
                message: $localize`:@@author_form.error.author_exists:Author already exists`
              },
        onError: () => ({
          kind: 'unknown',
          message: $localize`:@@author_form.error.unknown:Unknown error`
        })
      });
    },
    {
      submission: {
        action: async (fields) => {
          const { firstName, lastName } = fields().value();
          this.saveAuthor.emit({ name: getFullName(firstName, lastName) });
        }
      }
    }
  );

  @Output() saveAuthor = new EventEmitter<Pick<Author, 'name'>>();
}

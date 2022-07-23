import { FormControl, FormGroup } from '@angular/forms';

type FormControls<T> = { [K in keyof T]: FormControl<T[K]> };
export type Form<T> = FormGroup<FormControls<T>>;
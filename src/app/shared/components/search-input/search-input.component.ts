import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ap-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, FaIconComponent]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() searchValueChange = new EventEmitter<string>();

  searchIcon = faSearch;
  searchInput = new FormControl('', { nonNullable: true });

  private onDestroy$ = new Subject<boolean>();
  private DEBOUNCE_TIME = 400;

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe((value) => this.searchValueChange.emit(value));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}

import { Component, debounced, effect, output, signal } from '@angular/core';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ap-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  imports: [FaIconComponent]
})
export class SearchInputComponent {
  searchIcon = faSearch;
  searchInputValue = signal('');
  searchValue = debounced(this.searchInputValue, 400);
  searchValueChange = output<string>();

  constructor() {
    effect(() => {
      this.searchValueChange.emit(this.searchValue.value());
    });
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'ap-search-input',
    template: `<input class="ap-search-input" [formControl]="searchInput"/>`,
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

    @Output()
    onSearchValueChange = new EventEmitter<string>();

    searchInput: FormControl;

    private DEBOUNCE_TIME = 400;

    constructor() { }

    ngOnInit() {
        this.initializeSearchControl();
    }

    private initializeSearchControl(): void {
        this.searchInput = new FormControl('');
        this.searchInput.valueChanges
            .pipe(
                debounceTime(this.DEBOUNCE_TIME),
                distinctUntilChanged()
            )
            .subscribe((v: string) => this.onSearchValueChange.emit(v));
    }
}

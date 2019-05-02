import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ap-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

    @Output()
    onSearchValueChange = new EventEmitter<string>();

    searchInput: FormControl;

    private onDestroy$ = new Subject<boolean>();
    private DEBOUNCE_TIME = 400;

    constructor() { }

    ngOnInit() {
        this.initializeSearchControl();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.unsubscribe();
    }

    private initializeSearchControl(): void {
        this.searchInput = new FormControl('');
        this.searchInput.valueChanges
            .pipe(
                debounceTime(this.DEBOUNCE_TIME),
                distinctUntilChanged(),
                takeUntil(this.onDestroy$)
            )
            .subscribe((v: string) => this.onSearchValueChange.emit(v));
    }
}

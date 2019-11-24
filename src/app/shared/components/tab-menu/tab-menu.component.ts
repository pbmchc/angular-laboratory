import { Component, forwardRef, Input, TrackByFunction } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trackBy } from '../../utils/list.utils';
import { Tab } from '../../models/tab/tab.model';

@Component({
    selector: 'ap-tab-menu',
    templateUrl: './tab-menu.component.html',
    styleUrls: ['./tab-menu.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TabMenuComponent),
        multi: true
      }
    ]
})
export class TabMenuComponent implements ControlValueAccessor {
    @Input() tabs: Tab[];
    value: string;
    trackByValue: TrackByFunction<Tab> = trackBy('value');

    onChange: (value: string) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: string) {
      const [{value: defaultValue}]: Tab[] = this.tabs;
      const initialValue: string = value || defaultValue;

      this.value = initialValue;
      this.onChange(initialValue);
    }

    registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setActiveTab({value}: Tab) {
        this.value = value;
        this.onChange(value);
    }
}

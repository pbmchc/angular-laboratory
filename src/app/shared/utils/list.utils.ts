import { TrackByFunction } from '@angular/core';

export function trackBy<T>(key?: keyof T): TrackByFunction<T> {
    return (index: number, item: T) => key ? item[key] : index;
}

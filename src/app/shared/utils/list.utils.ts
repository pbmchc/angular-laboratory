import { TrackByFunction } from '@angular/core';

export const trackBy = <T>(key?: keyof T): TrackByFunction<T> => (index: number, item: T) => key ? item[key] : index;

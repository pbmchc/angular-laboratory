import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private http = inject(HttpClient);

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}

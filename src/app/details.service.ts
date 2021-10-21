import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) { }
  getDetails(mediatype: any, itemId: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/${mediatype}/${itemId}?api_key=5c9a1cf62d4713ffe3c36068083ad9d9&language=en-US`
    );
  }
}


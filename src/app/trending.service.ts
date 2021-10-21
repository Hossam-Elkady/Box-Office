import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private _http: HttpClient) {}
  getTrending(mediaType: any, pageNum: any): Observable<any> {
    return this._http.get(
      `https://api.themoviedb.org/3/${mediaType}/popular?api_key=5c9a1cf62d4713ffe3c36068083ad9d9&language=en-US&page=${pageNum}`
    );
  }
}

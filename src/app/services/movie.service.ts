import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string =
    'https://api.themoviedb.org/3/trending/all/day?api_key=f65b258bd7ca7a4b4fc13c07dfe75152';

  base_url = 'https://api.themoviedb.org/3/movie/';

  api_key = 'f65b258bd7ca7a4b4fc13c07dfe75152';

  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(this.url);
  }
}

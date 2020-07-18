import { iMovie } from './../movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movie: iMovie;
  data: any;
  movieTitle: string;
  movieListTitle: string;
  base_url = 'https://api.themoviedb.org/3/';
  api_key = 'f65b258bd7ca7a4b4fc13c07dfe75152';

  constructor(private http: HttpClient) {}

  // get POPULAR Movies
  getMovies() {
    return this.http.get(
      `${this.base_url}movie/popular?api_key=${this.api_key}`
    );
  }
  getLatestMovies() {
    // https://api.themoviedb.org/3/movie/latest?api_key=f65b258bd7ca7a4b4fc13c07dfe75152&language=en-US
    return this.http.get(
      `${this.base_url}/movie/latest?api_key=${this.api_key}`
    );
  }

  getTopRatedMovies() {
    return this.http.get(
      `${this.base_url}/movie/latest?api_key=${this.api_key}`
    );
  }
  getUpcomingMovies() {
    return this.http.get(
      `${this.base_url}/movie/latest?api_key=${this.api_key}`
    );
  }
  getGenres() {
    return this.http.get(
      `${this.base_url}genre/movie/list?api_key=${this.api_key}`
    );
  }
}

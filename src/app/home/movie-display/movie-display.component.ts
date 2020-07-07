import { UserService } from './../../services/user.service';
import { iMovie } from './../../movie.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent implements OnInit {
  movies = [];
  movie: iMovie;
  // movieForm = {};

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService
      .getMovies()
      // .pipe(map(responseData=>{
      //   const moviesArray:
      // }))
      .subscribe((res: any) => {
        console.log('subscribe', res.results);

        this.movies = res.results;
        Object.values(res.results).forEach((entry: any) => {
          // this.movie.title = entry.title;
          // this.movie.id = entry.id;
          this.movies.push(entry);
          console.log(entry);
          // console.log(this.movies);
        });
      });
    return this.movies;
  }
  seeMovieDetails(movie) {
    // this.movie.title = movie.title;
  }
  addToFavorites() {
    alert(`${this.movie.title} has been added to your favorites!`);
    this.userService.addUserFavorites(this.movie).subscribe((res: any) => {
      console.log(res);
    });

    // alert(this.movie);
  }
}

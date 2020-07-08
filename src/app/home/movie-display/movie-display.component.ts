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
  movies;
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
    // console.log('movie-display', this.movies);
    this.movieService.getMovies().subscribe((res: any) => {
      console.log(res.results);
      this.movies = res.results;
    });
  }
  seeMovieDetails(movie) {
    // console.log(this.movie);
    this.movie = movie;
    console.log(movie);
  }
  addToFavorites(movie) {
    this.movie = movie;

    this.movie.movieTitle = movie.title;
    this.movie.thirdPartyMovieId = movie.id;
    this.movie.posterPath = movie.poster_path;
    alert(`${this.movie.movieTitle} has been added to your favorites!`);
    this.userService.addUserFavorites(this.movie);
    // this.userService.addUserFavorites(this.movie).subscribe((res: any) => {
    //   console.log(res);
    // });

    return movie;

    // alert(this.movie);
  }
}

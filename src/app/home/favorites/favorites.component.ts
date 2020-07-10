import { MovieDisplayComponent } from './../movie-display/movie-display.component';
import { iMovie } from './../../movie.model';
import { MovieService } from './../../services/movie.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

// import { Router } from '@angular/'
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  @Input() movieActive;
  favoriteMovie: iMovie;
  isFavorite: boolean;

  constructor(
    private movieService: MovieService,
    private userService: UserService
  ) {}

  ngOnInit() {}
  // add favproted data tp tje ;loopback database with a tokens
  onClick() {
    // IF user is NOT logged in, alert log in first
    //ELSE IF  user is logged in...
    // console.log(this.movieActive);
    this.addToFavorites(this.favoriteMovie);
  }
  addToFavorites(movie) {
    // return (this.userService.UserId)
    // alert('add to favorites');
    // this.movie = movie;
    // this.movie.movieTitle = movie.title;
    // this.movie.thirdPartyMovieId = movie.id;
    // this.movie.posterPath = movie.poster_path;
    // console.log(this.movie);
    // this.isFavorite = true;
    // this.userService.addUserFavorites(this.movie);
    // alert(`${this.movie.movieTitle} has been added to your favorites!`);
    // return movie;
    // alert(this.movie);
    // this.addToFavorites(movieTitle, movieId);
  }
}

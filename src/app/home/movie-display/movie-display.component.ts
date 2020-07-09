import { UserService } from './../../services/user.service';
import { iMovie } from './../../movie.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent implements OnInit {
  @Input() movieActive;
  basic;
  movies;
  movie: iMovie = {
    movieTitle: null,
    thirdPartyMovieId: null,
    posterPath: null,
  };

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    console.log('movie-display', this.movies);
    this.movieService.getMovies().subscribe((res: any) => {
      console.log(res.results);
      this.movies = res.results;
    });
  }
  openModal(param) {
    let movieTitle = '{{movie.movieTitle}}';
    let poster = 'https://image.tmdb.org/t/p/w300/{{ movie.poster_path }}';
    this.movieActive = { ...param, poster, movieTitle };

    if (this.basic === true) {
      return (this.basic = false);
    }
    this.basic = true;
    console.log(this.movieActive);
  }
  seeMovieDetails(movie) {
    this.basic = !this.basic;
    // console.log(this.movie);
    this.movie = movie;

    console.log(movie);
  }
  addToFavorites(movie) {
    // this.movie = movie;

    this.movie.movieTitle = movie.title;
    this.movie.thirdPartyMovieId = movie.id;
    this.movie.posterPath = movie.poster_path;
    console.log(this.movie);
    // this.isFavorite = true;

    this.userService.addUserFavorites(this.movie);

    alert(`${this.movie.movieTitle} has been added to your favorites!`);

    return movie;

    // alert(this.movie);
  }
}

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
}

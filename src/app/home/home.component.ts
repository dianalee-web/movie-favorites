import { iMovie } from './../movie.model';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies;
  movieListTitle;
  genreActive = {
    name: null,
    id: null,
  };

  @Input() genres = [];
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    // console.log(this.genres);
    this.fetchData();
  }
  fetchData() {
    this.movieService.getMovies().subscribe((res: any) => {
      // console.log('from home', typeof res.results);
      this.movieService.data = res.results;
      this.movieService.movieListTitle = 'Popular Movies';
      console.log(this.movieService.data);
    });
    return this.movies;
  }
  onSelect() {
    // console.log(this.genreActive);
    this.changeMovieDisplay(this.genreActive);
  }
  changeMovieDisplay(param) {
    console.log(this.genres);
    console.log(this.genreActive);
  }
}

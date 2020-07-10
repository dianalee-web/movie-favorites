import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie;

  basic;
  movieActive;

  constructor() {}

  ngOnInit() {
    // console.log('movie component', this.movie);
  }
  onClick() {
    console.log(this.movie);
    this.openModal(this.movie);
  }

  openModal(param) {
    let movieTitle = '{{movie.movieTitle}}';
    let poster =
      'https://image.tmdb.org/t/p/w300/{{ movieActive.poster_path }}';
    this.movieActive = { ...param, poster, movieTitle };

    if (this.basic === true) {
      return (this.basic = false);
    }
    this.basic = true;
    console.log(this.movieActive);
  }
  // seeMovieDetails(movie) {
  //   this.basic = !this.basic;
  //   console.log(this.movie);
  //   this.movie = movie;

  //   console.log(movie);
  // }
}

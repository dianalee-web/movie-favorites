import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent implements OnInit {
  movies;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService.getMovies().subscribe((res) => {
      console.log(res);
      this.movies = res;
    });
    return this.movies;
  }
}

import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent implements OnInit {
  movies = [];
  movieForm = {};
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService.getMovies().subscribe((res: any) => {
      console.log(res.results);
      Object.values(res.results).forEach((entry) => {
        console.log(entry);
        this.movies.push(entry);
      });
      return this.movies;
      // this.movies = res;
    });
    // console.log(this.movies);
  }
}

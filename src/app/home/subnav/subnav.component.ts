import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css'],
})
export class SubnavComponent implements OnInit {
  genre = {
    id: null,
    name: null,
  };
  genres = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService.getGenres().subscribe((res: any) => {
      // console.log(res.genres);
      Object.values(res.genres).forEach((entry) => {
        // console.log(entry);
        this.genres.push(entry);
      });

      return this.genres;
    });
  }
}

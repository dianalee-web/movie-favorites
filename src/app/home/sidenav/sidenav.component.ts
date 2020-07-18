import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  genres = [];
  genre: any = {
    id: null,
    name: null,
  };
  @Input() genreActive;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService.getGenres().subscribe((res: any) => {
      console.log(res.genres);
      Object.values(res.genres).forEach((entry) => {
        console.log(entry);
        this.genre = entry;
        this.genres.push(entry);
      });

      return this.genres;
    });
  }
  displayMovie() {}
  onSelect() {
    console.log(this.genre);
  }
}

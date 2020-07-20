import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  genres: any = [];

  @Input() genre = {
    id: null,
    name: null,
  };
  // @Input() genreActive;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.movieService.getGenres().subscribe((res: any) => {
      // console.log(typeof res, res, res.genres);
      console.log('res', res);
      this.genres = res.genres;
      this.genres.forEach((genreInfo) => {
        this.genre = genreInfo;
        console.log(this.genre);
      });
    });

    return this.genres;
  }
  // onSelect() {
  //   this.genre;
  // }
}

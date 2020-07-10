import { UserService } from './../../services/user.service';
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

  constructor(private userService: UserService) {}

  ngOnInit() {}
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
  addToFavorites() {
    // let token = sessionStorage.getItem('token');
    // let favoritesUrl = "http://localhost:3000/api/appUsers/${sessionStorage.getItem("userId")}/favorites/?access_token=${token}`"
    // this._http.get(favoritesUrl).subscribe((res) => console.log('res', res));
  }
}

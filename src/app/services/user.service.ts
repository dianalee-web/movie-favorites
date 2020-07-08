import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  firstName: string = '';
  isLoggedIn: boolean = false;
  userEmail: string = '';
  userId = sessionStorage.getItem('userId');
  token = sessionStorage.getItem('token');
  // token = '"JDAT8LY7ie88LbsWMK2TKdgOZWHAhpG2zSbCjXZV1KyiVnrYpby6YkSbuo7Bja0c"';
  baseUrl: string = 'http://localhost:3000/api/';
  appUserUrl: string = 'appUsers/';
  loginUrl: string = 'appUsers/login';
  favoritesUrl: string = 'favorites';

  constructor(private http: HttpClient) {}

  registerUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
  loginUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials);
  }
  addUserFavorites(favoriteMovie) {
    // http://localhost:3000/api/favorites?access_token=4FfjkiITWy7PCalsUYvHMw9fES2UL7Jm4UaXXVmKlBJTYjIe84jasEUmhxITg0kS
    return this.http.post(
      `http://localhost:3000/api/favorites?access_token=${this.token}`,
      favoriteMovie
    );
  }
  createHeader() {
    return new HttpHeaders().set(
      'Authorization',
      sessionStorage.getItem('token')
    );
  }

  addFavoriteMovie(movieForm) {
    return this.http.post(
      `${this.baseUrl}appUsers/${this.userId}/${this.favoritesUrl}`,
      movieForm,
      { headers: this.createHeader() }
    );
  }

  getFavorites() {
    return this.http.get(
      `${this.baseUrl}appUsers/${this.userId}/favorites/access_token=${this.token}`
    );
  }
}

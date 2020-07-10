import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // firstName: string = '';
  isLoggedIn: boolean = false;
  userEmail: string = '';
  firstName;
  baseUrl: string = 'http://localhost:3000/api/';
  appUserUrl: string = 'appUsers/';
  loginUrl: string = 'appUsers/login';
  favoritesUrl: string = 'favorites';

  constructor(private http: HttpClient) {}
  getCreds() {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    return { token, userId };
  }
  registerUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
  loginUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials);
  }
  addUserFavorites(favoriteMovie) {
    const creds = this.getCreds();
    return this.http.post(
      `http://localhost:3000/api/favorites?access_token=${creds.token}`,
      favoriteMovie
    );
  }
  createHeader() {
    const creds = this.getCreds();
    return new HttpHeaders().set(
      'Authorization',
      sessionStorage.getItem(creds.token)
    );
  }

  addFavoriteMovie(movieForm) {
    const creds = this.getCreds();

    return this.http.post(
      `${this.baseUrl}appUsers/${creds.userId}/${this.favoritesUrl}`,
      movieForm,
      { headers: this.createHeader() }
    );
  }

  getFavorites() {
    const creds = this.getCreds();
    const userId = sessionStorage.getItem('userId');
    return this.http.get(
      `${this.baseUrl}appUsers/${creds.userId}/favorites/access_token=${creds.token}`
    );
  }
  logOut() {
    const creds = this.getCreds();
    return this.http.post(
      `${this.baseUrl}appUsers/logout?access_token=${creds.token}`,
      {},
      { headers: this.createHeader() }
    );
  }
}

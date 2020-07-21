import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // firstName: string = '';
  // userInfo = [];

  registeredUser: any = {};

  currentAppUser: any = {};

  isLoggedIn: boolean = false;

  // baseUrl: string = 'http://localhost:3000/api/';
  baseUrl: string = 'https://git.heroku.com/my-heroku-test-test.git/api/';
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
    const creds = this.getCreds();

    return this.http.post(
      `${this.baseUrl}${this.appUserUrl}login?access_token=${creds.token}`,
      userCredentials
    );
  }
  getRegisteredUserInfo() {
    const creds = this.getCreds();
    // http://localhost:3000/api/appUsers/5edeea70b802e73c4cc47dfa?access_token=XtLUiXLmNFf71NEetPqXybBsGPK0wBDNkjZMARVha5xtU2oFls0nxyBa4d2FttjE
    return this.http.get(
      `${this.baseUrl}appUsers/${creds.userId}?access_token=${creds.token}`
    );
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
    // const userId = sessionStorage.getItem('userId');
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

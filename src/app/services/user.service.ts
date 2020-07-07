import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firstName: string = '';
  isLoggedIn: boolean = false;
  userEmail: string = '';
  userId = sessionStorage.getItem('userId');
  token = sessionStorage.getItem('token');

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
    return this.http.post(`${this.baseUrl}${this.favoritesUrl}`, favoriteMovie);
  }
  // createHeader() {
  //   return new HttpHeaders().set(
  //     'Authorization',
  //     sessionStorage.getItem('token')
  //   );
  // }
}

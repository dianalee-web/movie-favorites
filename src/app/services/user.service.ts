import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  firstName;
  isLoggedIn;

  baseUrl: string = 'http://localhost:3000/api/';
  appUserUrl: string = 'appUsers/';

  constructor(private http: HttpClient) {}

  registerUser(userCredentials) {
    return this.http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}

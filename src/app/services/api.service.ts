import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoggedIn: boolean;
  firstName: string;
  // connect to movie API

  // connect to loopback server
  baseUrl: string = 'http://localhost:3000/api/';
  appUserUrl: string = 'appUsers/';

  constructor(private http: HttpClient) {}

  registerUser(userCredentials) {
    console.log(userCredentials);
    return this.http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}

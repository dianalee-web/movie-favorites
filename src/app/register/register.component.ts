import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    // this.registerUser();
  }
  signUp() {
    this.apiService.registerUser(this.form).subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.apiService.firstName = res.firstName;
      this.apiService.isLoggedIn = true;
      this.goToDash();
    });
  }

  goToDash() {
    this.router.navigate(['/home']);
  }
}

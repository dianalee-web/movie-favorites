import { UserService } from './../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = {
    password: null,
    email: null,
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login() {
    this.userService.loginUser(this.form).subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.userService.firstName = res.firstName;
      // this.userService.isLoggedIn = true;
      if (sessionStorage.token != null) {
        alert('log in success!');
        this.goToDash();
      } else {
        alert('Register !');
        this.router.navigate(['/register']);
      }
    });
  }

  goToDash() {
    this.router.navigate(['/home']);
  }
}

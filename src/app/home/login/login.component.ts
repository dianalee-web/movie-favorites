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

  registeredUser: any = {};

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login() {
    this.userService.loginUser(this.form).subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);

      if (sessionStorage.token !== null) {
        this.userService.getRegisteredUserInfo().subscribe((res: any) => {
          console.log('here', res);
        });
        this.registeredUser = res;
        console.log('HERE', this.registeredUser);
        this.userService.isLoggedIn = true;
        this.loginSuccess();
      } else {
        this.loginFail();
      }
    });
  }

  loginSuccess() {
    alert('log in successful');
    this.router.navigate(['/home']);
  }
  loginFail() {
    alert('login FAIL ');
    this.router.navigate(['/register']);
  }
}

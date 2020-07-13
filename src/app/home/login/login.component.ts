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
  isLoggedIn: boolean;

  currentAppUser = {
    firstName: null,
    lastName: null,
    email: null,
    id: null,
  };
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login() {
    this.userService.loginUser(this.form).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);

      console.log(res);

      if (sessionStorage.token !== null) {
        this.loginSuccess();
      } else {
        this.loginFail();
      }
    });
  }

  loginSuccess() {
    this.userService.getRegisteredUserInfo().subscribe((res: any) => {
      alert('login success');
      console.log(res);
      console.log(res.firstName, res.lastName, res.email);
      this.currentAppUser = res;
      console.log('app user', this.currentAppUser);
      // this.userService.isLoggedIn = !this.userService.isLoggedIn;
      this.userService.isLoggedIn = true;
      // this.currentAppUser = this.userService.currentAppUser;
      this.isLoggedIn = this.userService.isLoggedIn;
    });
    console.log(
      this.isLoggedIn,
      this.userService.registeredUser,
      this.userService.currentAppUser
    );
    // console.log(this.userService.res);
    // this.userService.isLoggedIn = true;
    // console.log('success', this.userService.userInfo);
    // alert('log in successful');
    this.router.navigate(['/home']);
  }
  loginFail() {
    alert('login FAIL ');
    this.router.navigate(['/register']);
  }
}

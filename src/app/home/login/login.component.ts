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
    this.userService.isLoggedIn = true;
    this.userService.loginUser(this.form).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);

      // console.log(res);
      if (sessionStorage.token !== null) {
        this.loginSuccess();
        // this.userService.userInfo;
        // this.userService.getRegisteredUserInfo().subscribe((res: any) => {
        // this.userService.userInfo.push(res);
        // });

        // this.userService.isLoggedIn = true;
      } else {
        this.loginFail();
      }
    });
  }

  loginSuccess() {
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

import { UserService } from './../services/user.service';
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

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // this.registerUser();
  }
  signUp() {
    this.userService.registerUser(this.form).subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.userService.firstName = res.firstName;
      this.userService.isLoggedIn = true;
      this.goToDash();
    });
  }

  goToDash() {
    this.router.navigate(['/home']);
  }
}

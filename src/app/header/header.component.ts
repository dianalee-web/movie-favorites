import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  firstName: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.loginUser(params);
    // this.firstName = this.userService.firstName;
    this.loginUser();
  }
  loginUser() {}
}

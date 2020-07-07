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
    // this.firstName = this.userService.firstName;
  }
}

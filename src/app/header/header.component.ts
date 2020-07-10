import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() loggedInUser;
  isLoggedIn: boolean;

  firstName: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.loginUser(params);
    // this.firstName = this.userService.firstName;
  }
}

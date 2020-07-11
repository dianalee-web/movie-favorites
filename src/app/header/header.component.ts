import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Input() registeredUser;
  // currentUser: any;
  isLoggedIn: boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // console.log(this.currentUser[1].firstName);
    // this.changeNavigationLinks();
    // return (this.userService.isLoggedIn = this.isLoggedIn);
  }
  changeNavigationLinks() {
    // console.log(this.currentUser);
  }
}

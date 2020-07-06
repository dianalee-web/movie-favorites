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

  constructor() {}

  ngOnInit(): void {}
}

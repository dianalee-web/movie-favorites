import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  movie;
  @Input() movieActive;
  @Input() basic;

  constructor() {}

  ngOnInit() {
    console.log(this.movieActive);
    // this.openModal(this.movieActive);
  }
}

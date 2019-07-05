import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {
@Output() public parentEvent = new EventEmitter();
  message(value) {
  this.parentEvent.emit(value);
}
  constructor() { }

  ngOnInit() {
  }

}

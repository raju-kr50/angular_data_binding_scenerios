import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child6a',
  templateUrl: './child6a.component.html',
  styleUrls: ['./child6a.component.css']
})
export class Child6aComponent implements OnInit {
@Output() public childEvent = new EventEmitter();
  clicked(value) {
  this.childEvent.emit(value);
}
  constructor() { }

  ngOnInit() {
  }

}

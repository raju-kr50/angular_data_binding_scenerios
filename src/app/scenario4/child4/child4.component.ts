import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
@Output() public name = new EventEmitter();
  clicked(value) {
this.name.emit(value);
}
  constructor() { }

  ngOnInit() {
  }
}

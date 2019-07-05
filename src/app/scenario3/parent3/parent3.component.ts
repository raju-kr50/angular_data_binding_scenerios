import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
public variable = '';

clicked(data) {
  this.variable = data;
}
  constructor() { }

  ngOnInit() {
  }

}

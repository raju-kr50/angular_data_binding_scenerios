import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent6',
  templateUrl: './parent6.component.html',
  styleUrls: ['./parent6.component.css']
})
export class Parent6Component implements OnInit {
public dummyvariable = '';
  parentVariable(value) {
  this.dummyvariable = value;
}
  constructor() { }

  ngOnInit() {
  }

}

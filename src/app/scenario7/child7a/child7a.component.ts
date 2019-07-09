import { Component, OnInit } from '@angular/core';
import { ScenarioService } from '../../scenario.service';

@Component({
  selector: 'app-child7a',
  templateUrl: './child7a.component.html',
  styleUrls: ['./child7a.component.css']
})
export class Child7aComponent implements OnInit {
user: string;
editUser: string;
  constructor(private scenarioservice: ScenarioService) { }

  ngOnInit() {
    this.scenarioservice.cast.subscribe(user => this.user = user);
  }
onclick() {
  this.scenarioservice.editUser(this.editUser);
}
}

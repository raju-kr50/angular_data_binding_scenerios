import { Component, OnInit } from '@angular/core';
import { ScenarioService } from 'src/app/scenario.service';

@Component({
  selector: 'app-child7b',
  templateUrl: './child7b.component.html',
  styleUrls: ['./child7b.component.css']
})
export class Child7bComponent implements OnInit {
user: string;
  constructor(private scenarioservice: ScenarioService) { }

  ngOnInit() {
    this.scenarioservice.cast.subscribe(user => this.user = user);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child7aComponent } from './child7a/child7a.component';
import { Child7bComponent } from './child7b/child7b.component';
import { Parent7Component } from './parent7/parent7.component';
import { ScenarioService } from '../scenario.service';

@NgModule({
  declarations: [Child7aComponent, Child7bComponent, Parent7Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [Child7aComponent, Child7bComponent, Parent7Component],
  providers: [ScenarioService],
  exports:[Child7aComponent, Child7bComponent, Parent7Component]
})
export class Scenario7Module { }

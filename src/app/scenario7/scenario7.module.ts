import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child7aComponent } from './child7a/child7a.component';
import { Child7bComponent } from './child7b/child7b.component';

@NgModule({
  declarations: [Child7aComponent, Child7bComponent],
  imports: [
    CommonModule
  ]
})
export class Scenario7Module { }

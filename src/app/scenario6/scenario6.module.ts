import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child6aComponent } from './child6a/child6a.component';
import { Child6bComponent } from './child6b/child6b.component';
import { Parent6Component } from './parent6/parent6.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [Child6aComponent, Child6bComponent, Parent6Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [Child6aComponent, Child6bComponent, Parent6Component],
  exports: [Child6aComponent, Child6bComponent, Parent6Component]
})
export class Scenario6Module { }

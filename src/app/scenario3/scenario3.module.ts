import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3Component } from './child3/child3.component';
import { Parent3Component } from './parent3/parent3.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [Child3Component, Parent3Component],
  imports: [
    CommonModule,
    BrowserModule
  ], bootstrap: [Parent3Component,
    Child3Component],
  exports: [Parent3Component,
    Child3Component]
})
export class Scenario3Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [Component1Component],
  exports: [Component1Component]
})
export class Scenario1Module { }

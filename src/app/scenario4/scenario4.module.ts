import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child4Component } from './child4/child4.component';
import { Parent4Component } from './parent4/parent4.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [Child4Component, Parent4Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [Child4Component,
    Parent4Component],
  exports: [Child4Component,
    Parent4Component]
})
export class Scenario4Module { }

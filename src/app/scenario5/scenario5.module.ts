import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child5Component } from './child5/child5.component';
import { Parent5Component } from './parent5/parent5.component';
import { Grandparent5Component } from './grandparent5/grandparent5.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [Child5Component, Parent5Component, Grandparent5Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [Child5Component, Parent5Component, Grandparent5Component],
  exports: [Child5Component, Parent5Component, Grandparent5Component]
})
export class Scenario5Module { }

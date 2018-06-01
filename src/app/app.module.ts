import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentA } from './componentA.component';
import { ComponentB } from './componentB.component';

@NgModule({
  declarations: [
    ComponentA,
    ComponentB
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentA]
})
export class AppModule { }

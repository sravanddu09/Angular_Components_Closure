import { Component } from '@angular/core';

@Component({
  selector: 'component-a',
  templateUrl: './componentA.component.html',
  styleUrls: ['./componentA.component.css']
})
export class ComponentA {
  title = 'My Sample App';
  helloName: string;
  compontACount = 0;
  updatedCount = 0;
  modify(val: number) {
    this.updatedCount = val ;
  }
  constructor() {
    this.helloName = 'Parent Component A says';

    //Closure Example with and without let.

    var arrFuncs = [];   
    for (var i = 0; i < 3; i++) {
      arrFuncs.push(function() {
            console.log(i);
        })
    }
    // call them
    for (var j = 0; j < 3; j++) {
      arrFuncs[j]();
    }


    //let would have closure behavior
    var arrFuncs = [];  
    for (let i = 0; i < 3; i++) { 
      arrFuncs.push(function() {
            console.log(i);
        })
    }    
    for (var j = 0; j < 3; j++) {
      arrFuncs[j]();
    }

   

  }
  
}

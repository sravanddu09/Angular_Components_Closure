import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'componentB',
  templateUrl: './componentB.component.html'
})
export class ComponentB implements OnInit {
  //@Input() name: string;
  private _name: string
  @Input() count = 0;
  @Output() result = new EventEmitter<number>();
  constructor() {
  }

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
  get name(): string {
    // transform value for display

    return this._name.toUpperCase()
  }

  @Input()
  set name(name: string): void {
    this._name = name + ' Hi to child component B';;
  }
  ngOnInit() {
    console.log('on init');
    console.log(this._name);
  }
}

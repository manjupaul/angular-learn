import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './events.html'
})
export class EventsComponent {
  n: number = 0;

  increment() {
    this.n++;
  }

  over(x: MouseEvent): void { // we have one input parameter and we are expecting MouseEvent, it cannot be guaranted that we will only get MouseEvent
    console.log('Over: ', x);
  }

  move(x: MouseEvent): void {
    this.n++;
    console.log('Move: ', x);
  }

  typed(x: KeyboardEvent): void {
    console.log('Typed: ', x);
  }
}

// TypeScript got built in mouse event
// TSLint

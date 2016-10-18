import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './bindings.html'
})
export class BindingsComponent {
  version: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  person: string;
  stringWithHtml: string;
  personObject: { mother: string; };
  private x: string = 'Only available inside';
  myText: string;

  constructor() {
    this.version = 'Other';
    this.person = 'everyone';
    this.stringWithHtml = `
      <button onClick='console.log('hello from old-school HTML/JS');'>
        Press Me
      </button>
      <i>Hello from <b>HTML</b></i>
    `;
    this.personObject = { mother: 'Jane' };
    this.x = 'Hello World';
    this.myText = 'this is my text';
  }

  calculate(): number { // define a method :number -> type script saying this function returns a number. Returns error if we do not return number
    console.log('calculating');
    return 22 / 7;
  }
}

/*
Type script adds type to variables
type script allows to not have variable data type. It allows us to define how tightly we want to define the variables.

`allows multilene string` - back tick 
*/

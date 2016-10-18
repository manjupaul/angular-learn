import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './first';

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
export class AppModule { } // What is available from app.ts module . Anything defined with export can be imported by others (like public)



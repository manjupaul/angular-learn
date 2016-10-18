import { BrowserModule } from '@angular/platform-browser'; // importing es6 features
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First TypeScript Angular 2 App!! Yo!!</h1>'
})
class FirstComponent { } // es6 festure to declare class instead of js constructor @component goes with the class FirstComponent. For component we need class

@NgModule({ // es6 feature. It needs a class. NgModule is angular module. Angular2 can be used to native desktop/mobile applications with some difference in imports . platform module is for browser
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


/*
 platformBrowserDynamic
 BrowserModule - does browser specific stuff, like DOM manipulation - cross browser compatible
 import { NgModule, Component } from '@angular/core'; - angular annotations

 webserver - live server - does auto refresh - using web socket that looks for changes

 annotations has to go with class, right before the class we need to put the annotation

 annotations are ES7 feature,
 angular @6
 type script - microsoft
 type script created annotations for angular 2

 ES7 - finalized in 2017

 import - es6
 class - angular
 annotation - es7

 Es5 – ecma script 5 – javascript official name
Typescript – es6
Es5 -> es6 -> typescript // backward compatible
Bable -  compiler for es6 to es5

 */
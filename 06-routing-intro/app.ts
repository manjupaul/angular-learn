import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';
import { HomeComponent } from './home';
import { NameComponent } from './name';
import { MyPageComponent } from './myPage';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // since all routes have empty space , so we say pathMatch: full to say only empty string
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent },
  {path: 'myPage', component: MyPageComponent}
];

// TODO : check myPage with href highlighting the other one

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NameComponent,
    MyPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }) // weather to use # in the url, if we turn this off then we will have to do extra stuff to tell server to ignore the url for navigations.
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }

// Example of hash route
// http://example.com/#/product/12

// Example of HTML5 route
// http://example.com/product/12

// base-href must be set either in the index.html, or via
// code; here is an older way to do this:
//   bind(APP_BASE_HREF).toValue(location.pathname)]);
// HTML5 routes can be demonstrated with live-server --entry-file=index.html

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'my-app',
  template: `
    <h3>Phones</h3>
    <ul>
      <li *ngFor="let p of phones">
        {{p.name}}
      </li>
    </ul>
  `
})
export class PhonesComponent {
  phones: any[];

  constructor(http: Http) {
    this.getAndSubscribe(http);
  }

  getAndSubscribe(http: Http) {
    http.get('../demo-data/ZZZphones.json')
      .map((res: Response) => res.json())
      .retry(3)  // Try commenting this out. We can retry after some soem observable -> check retryThen
      .catch((err) => {
        console.error('handling error', err);
        const fakeData = [{ name: 'no phone' }];
        //Observable.throw(err) -> will not handle the error, goes to next catch. We can have multiple catch like java
        return Observable.of(fakeData); // just gets out of the catch
      })
      .subscribe((data: any) => {
        console.log('Data arrived', data);
        this.phones = data;
      }, (err: any) => console.log('handling additional errors'));
      // (err: any) -> we will see this if subscribe gets an error

//below another way to write code with "function" rather than using =>
// use bind when using function

      // let that = this;
      // http.get('../demo-data/ZZZphones.json')
      // .map(function(res: Response) { return res.json(); } )
      // .retry(3)  // Try commenting this out.
      // .catch(function (err)  {
      //   console.error('handling error', err);
      //   const fakeData = [{ name: 'no phone' }];
      //   //Observable.throw(err) -> will not handle the error, goes to next catch. We can have multiple catch like java
      //   return Observable.of(fakeData); // just gets out of the catch
      // })
      // .subscribe(function (data: any)  {
      //   console.log('Data arrived', data);
      //   that.phones = data;
      // }, function (err: any) { console.log('handling additional errors')});
  }
}

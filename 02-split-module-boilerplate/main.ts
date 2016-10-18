import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app'; // importing AppModule - importing from our own module (.ts not included)

platformBrowserDynamic().bootstrapModule(AppModule);

// AOT - ahead of time compilation
//

//import {} '@angular/platform-browser-static'

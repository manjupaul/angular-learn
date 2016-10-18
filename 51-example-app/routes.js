var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var welcome_1 = require('./welcome');
var select_1 = require('./select/select');
var configure_1 = require('./configure/configure');
var summary_1 = require('./summary');
var routes = [
    { path: '', component: welcome_1.WelcomeScreen, pathMatch: 'full' },
    { path: 'select', component: select_1.SelectScreen },
    { path: 'configure/:id/:avatarName', component: configure_1.ConfigureScreen },
    { path: 'summary', component: summary_1.SummaryScreen }
];
exports.ROUTE_PROVIDERS = [
    router_1.provideRouter(routes),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
];
//# sourceMappingURL=routes.js.map
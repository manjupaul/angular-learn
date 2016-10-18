// This example shows the particular variation of routing syntax
// needed to work with the CLI lazy loading support. The syntax can be
// slightly different if you are using a different tooling approach.
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'hello', loadChildren: './name.module#NameModule' }
];
var config = {
    useHash: true,
    enableTracing: true
};
exports.APP_ROUTER_MODULE = router_1.RouterModule.forRoot(routes, config);
exports.ROUTED_COMPONENTS = [home_component_1.HomeComponent];
//# sourceMappingURL=routes.js.map
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'cars', loadChildren: 'app/cars/cars.module#CarsModule' },
    { path: 'people', loadChildren: 'app/people/people.module#PeopleModule' }
];
exports.ROUTER_MODULE = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=routes.js.map
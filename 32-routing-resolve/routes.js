var router_1 = require('@angular/router');
var welcome_1 = require('./welcome');
var companies_component_1 = require('./companies.component');
var data_1 = require('./data');
var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_1.Welcome },
    {
        path: 'companies',
        component: companies_component_1.Companies,
        resolve: { companies: data_1.CompanyListRetriever }
    }
];
exports.APP_ROUTER_MODULE = router_1.RouterModule.forRoot(routes, { useHash: true });
exports.APP_ROUTER_MODULE.providers.push(data_1.CompanyListRetriever);
exports.ROUTED_COMPONENTS = [welcome_1.Welcome, companies_component_1.Companies];
//# sourceMappingURL=routes.js.map
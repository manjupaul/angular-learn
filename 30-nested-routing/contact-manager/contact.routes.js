var people_component_1 = require('./people.component');
var companies_component_1 = require('./companies.component');
exports.contactRoutes = [
    { path: '', redirectTo: 'people', pathMatch: 'full' },
    { path: 'people', component: people_component_1.People },
    { path: 'companies', component: companies_component_1.Companies }
];
exports.CONTACT_ROUTED_COMPONENTS = [people_component_1.People, companies_component_1.Companies];
//# sourceMappingURL=contact.routes.js.map
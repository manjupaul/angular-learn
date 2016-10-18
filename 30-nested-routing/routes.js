var router_1 = require('@angular/router');
var welcome_1 = require('./welcome');
var contacts_component_1 = require('./contact-manager/contacts.component');
var contact_routes_1 = require('./contact-manager/contact.routes');
var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_1.Welcome },
    {
        path: 'contacts',
        component: contacts_component_1.Contacts,
        children: contact_routes_1.contactRoutes
    }
];
var config = {
    useHash: true,
    enableTracing: true
};
exports.APP_ROUTER_MODULE = router_1.RouterModule.forRoot(routes, config);
exports.ROUTED_COMPONENTS = [welcome_1.Welcome, contacts_component_1.Contacts].concat(contact_routes_1.CONTACT_ROUTED_COMPONENTS);
//# sourceMappingURL=routes.js.map
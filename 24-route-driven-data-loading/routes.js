var router_1 = require('@angular/router');
var employeeList_1 = require('./employeeList');
var employeeDetail_1 = require('./employeeDetail');
var appRoutes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: employeeList_1.EmployeeListComponent },
    { path: 'employee/:employeeId', component: employeeDetail_1.EmployeeDetailComponent }
];
exports.ROUTER_MODULE = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=routes.js.map
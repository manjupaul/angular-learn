var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var page_1 = require('./page');
var employeeList_1 = require('./employeeList');
var employeeDetail_1 = require('./employeeDetail');
var employeeDisplay_1 = require('./employeeDisplay');
var appRoutes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: employeeList_1.EmployeeListComponent },
    { path: 'employee/:employeeId', component: employeeDetail_1.EmployeeDetailComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                page_1.PageComponent,
                employeeList_1.EmployeeListComponent,
                employeeDetail_1.EmployeeDetailComponent,
                employeeDisplay_1.EmployeeDisplayComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
                http_1.HttpModule
            ],
            bootstrap: [page_1.PageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map
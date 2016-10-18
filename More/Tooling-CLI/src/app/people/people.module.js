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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var people_component_1 = require('./people.component');
var routes = [
    { path: '', component: people_component_1.PeopleComponent, pathMatch: 'full' }
];
var PeopleModule = (function () {
    function PeopleModule() {
    }
    PeopleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [people_component_1.PeopleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleModule);
    return PeopleModule;
})();
exports.PeopleModule = PeopleModule;
//# sourceMappingURL=people.module.js.map
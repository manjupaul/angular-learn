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
var red_1 = require('./red');
var shared_module_1 = require('../shared/shared.module');
var RedModule = (function () {
    function RedModule() {
    }
    RedModule = __decorate([
        core_1.NgModule({
            declarations: [
                red_1.RedCardComponent
            ],
            exports: [red_1.RedCardComponent],
            imports: [shared_module_1.SharedModule, common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RedModule);
    return RedModule;
})();
exports.RedModule = RedModule;
//# sourceMappingURL=red.module.js.map
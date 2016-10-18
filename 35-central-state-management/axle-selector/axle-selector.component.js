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
require('rxjs/add/operator/map');
var car_state_service_1 = require('../car-state.service');
var AxleSelectorComponent = (function () {
    function AxleSelectorComponent(carStateService) {
        this.carStateService = carStateService;
    }
    AxleSelectorComponent.prototype.ngOnInit = function () {
        this.n$ = this.carStateService.state$.map(function (carState) { return carState.nAxles; });
    };
    AxleSelectorComponent.prototype.more = function () {
        this.carStateService.changeAxles(1);
    };
    AxleSelectorComponent.prototype.less = function () {
        this.carStateService.changeAxles(-1);
    };
    AxleSelectorComponent = __decorate([
        core_1.Component({
            selector: 'axle-selector',
            templateUrl: 'axle-selector/axle-selector.component.html'
        }), 
        __metadata('design:paramtypes', [car_state_service_1.CarStateService])
    ], AxleSelectorComponent);
    return AxleSelectorComponent;
})();
exports.AxleSelectorComponent = AxleSelectorComponent;
//# sourceMappingURL=axle-selector.component.js.map
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
var WheelSelectorComponent = (function () {
    function WheelSelectorComponent(carStateService) {
        this.carStateService = carStateService;
    }
    WheelSelectorComponent.prototype.ngOnInit = function () {
        this.typesAndQtys$ = this.carStateService.state$.map(function (carState) {
            return carState.wheelQtys.map(function (q, index) { return ({ wt: car_state_service_1.WHEEL_TYPES[index], q: q }); });
        });
    };
    WheelSelectorComponent.prototype.more = function (i) {
        this.carStateService.changeWheelQty(i, 1);
    };
    WheelSelectorComponent.prototype.less = function (i) {
        this.carStateService.changeWheelQty(i, -1);
    };
    WheelSelectorComponent = __decorate([
        core_1.Component({
            selector: 'wheel-selector',
            templateUrl: 'wheel-selector/wheel-selector.component.html'
        }), 
        __metadata('design:paramtypes', [car_state_service_1.CarStateService])
    ], WheelSelectorComponent);
    return WheelSelectorComponent;
})();
exports.WheelSelectorComponent = WheelSelectorComponent;
//# sourceMappingURL=wheel-selector.component.js.map
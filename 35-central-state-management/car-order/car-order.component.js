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
var car_state_service_1 = require('../car-state.service');
var CarOrderComponent = (function () {
    function CarOrderComponent() {
    }
    CarOrderComponent = __decorate([
        core_1.Component({
            selector: 'car-order',
            templateUrl: 'car-order/car-order.component.html',
            styleUrls: ['car-order/car-order.component.css'],
            providers: [car_state_service_1.CarStateService]
        }), 
        __metadata('design:paramtypes', [])
    ], CarOrderComponent);
    return CarOrderComponent;
})();
exports.CarOrderComponent = CarOrderComponent;
//# sourceMappingURL=car-order.component.js.map